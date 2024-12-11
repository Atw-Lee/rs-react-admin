import { QueryClient, useQuery } from '@tanstack/react-query';

// fetch 拦截器
type FetchInterceptor = (
  input: RequestInfo,
  init?: RequestInit,
) => Promise<[RequestInfo, RequestInit | undefined]>;

// 请求拦截器列表
const requestInterceptors: FetchInterceptor[] = [
  async (url, options) => {
    const token = localStorage.getItem('token'); // 从本地存储中获取 Token
    const updatedOptions = {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: token ? `Bearer ${token}` : '', // 将 Token 添加到 Authorization 头中
      },
    };
    return [url, updatedOptions];
  },
];

// 响应拦截器
type ResponseInterceptor = (response: Response) => Promise<Response>;
// 响应拦截器列表
const responseInterceptors: ResponseInterceptor[] = [];

// 基于 fetch 的请求封装
const baseUrl = '/api'; // 配置 API 基础地址

type FetchOptions = Omit<RequestInit, 'signal'> & { timeout?: number };

const fetchWithInterceptors = async <T>(
  url: string,
  options: FetchOptions = {},
): Promise<T> => {
  // 超时控制
  const { timeout = 10000, ...restOptions } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  let finalUrl = `${baseUrl}${url}`;
  let finalOptions: RequestInit = { ...restOptions, signal: controller.signal };

  try {
    // 应用请求拦截器
    for (const interceptor of requestInterceptors) {
      const result = await interceptor(finalUrl, finalOptions);
      finalUrl = result[0] as string; // 确保 finalUrl 是字符串
      finalOptions = result[1] || {};
    }

    const response = await fetch(finalUrl, finalOptions);

    // 检查 HTTP 状态码
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    // 应用响应拦截器
    let finalResponse = response;
    for (const interceptor of responseInterceptors) {
      finalResponse = await interceptor(finalResponse);
    }

    // 返回解析后的数据
    return await finalResponse.json();
  } finally {
    clearTimeout(id);
  }
};

// TanStack Query 配合封装
export const queryClient = new QueryClient();

export const useFetchQuery = <TData, TError = unknown>(
  queryKey: string[],
  url: string,
  options?: FetchOptions,
) => {
  return useQuery<TData, TError, TData>({
    queryKey,
    queryFn: () => fetchWithInterceptors<TData>(url, options),
  });
};
