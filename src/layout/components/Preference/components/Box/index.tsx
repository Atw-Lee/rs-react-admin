import { ReactNode } from 'react';
import { theme } from 'antd';
const { useToken } = theme;
type Props = {
  children: ReactNode;
  text: string;
};
function Index(props: Props) {
  const { token } = useToken();

  return (
    <div className="flex cursor-pointer flex-col">
      <div className="outline-box flex-center py-4">{props.children}</div>
      <div className="text-muted-foreground mt-2 text-center text-xs">
        {props.text}
      </div>
    </div>
  );
}

export default Index;
