import { createStyles } from 'antd-style';

const useStyle = createStyles(({ prefixCls, css, token }) => ({
  animationOutlineBox: css`
    &.${prefixCls}-outline-box {
      border-radius: ${token.borderRadius}px;
      position: relative;
      cursor: pointer;
      outline-color: ${token.colorSplit};
      outline-style: solid;
      outline-width: 1px;
      &::after {
        border-radius: ${token.borderRadius}px;
        height: 0;
        left: 50%;
        opacity: 0;
        outline-color: transparent;
        outline-style: solid;
        outline-width: 2px;
        position: absolute;
        top: 50%;
        transition-duration: 0.3s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        width: 1px;
        z-index: 20;
        animation-duration: 0.3s;
        content: '';
      }
      :not(.outline-box-active):hover:after {
        height: 100%;
        left: 0;
        opacity: 1;
        outline-color: ${token.colorPrimary};
        top: 0;
        width: 100%;
      }
    }
  `,
}));

export default useStyle;
