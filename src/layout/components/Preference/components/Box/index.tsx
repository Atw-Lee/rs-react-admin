import { ReactNode } from 'react';
import { theme } from 'antd';
import classNames from 'classnames';
import useStyle from '@/hooks/useStyle';
import { ANTD_PREFIX_CLS } from '@/const/const';
const { useToken } = theme;
type Props<T> = {
  children: ReactNode;
  text: string;
  onClick: (key: T) => void;
  id: T;
  active: boolean;
};
function Index<T>(props: Props<T>) {
  const { styles } = useStyle();
  const { token } = useToken();

  return (
    <div
      className="flex cursor-pointer flex-col flex-1"
      onClick={() => props.onClick(props.id)}
    >
      <div
        className={classNames({
          [`${styles.animationOutlineBox} ${ANTD_PREFIX_CLS}-outline-box text-center py-4`]:
            true,
          [`${ANTD_PREFIX_CLS}-outline-box-active`]: props.active,
        })}
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
