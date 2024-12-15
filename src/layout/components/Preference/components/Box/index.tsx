import { ReactNode } from 'react';
import { theme } from 'antd';
import useStyle from '@/hooks/useStyle';
import { ANTD_PREFIX_CLS } from '@/const/const';
const { useToken } = theme;
type Props = {
  children: ReactNode;
  text: string;
};
function Index(props: Props) {
  const { styles } = useStyle();
  const { token } = useToken();

  return (
    <div className="flex cursor-pointer flex-col flex-1">
      <div
        className={`${styles.animationOutlineBox} ${ANTD_PREFIX_CLS}-outline-box text-center py-4`}
      >
        {props.children}
      </div>
      <div
        className="text-muted-foreground mt-2 text-center text-xs"
        style={{
          color: token.colorTextSecondary,
        }}
      >
        {props.text}
      </div>
    </div>
  );
}

export default Index;
