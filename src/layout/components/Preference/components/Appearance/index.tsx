import { Flex, ColorPicker } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useAppStore } from '@/store';
import Theme from './components/Theme';
import ThemeColor from './components/ThemeColor';

function Index() {
  const flexCls = 'flex flex-col py-4';
  const h3Cls = 'mb-2 h-6 font-semibold tracking-tight';
  const primaryColor = useAppStore((state) => state.primaryColor);
  const setPrimaryColor = useAppStore((state) => state.setPrimaryColor);

  return (
    <Flex className="mt-2" vertical>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>
          <FormattedMessage id="app.preference.appearance.theme" />
        </h3>
        <Theme />
      </Flex>
      <Flex className={flexCls}>
        <h3 className={`${h3Cls} flex justify-between items-center`}>
          <FormattedMessage id="app.preference.appearance.primaryColor" />
          <ColorPicker
            size="small"
            value={primaryColor}
            onChangeComplete={(color) => {
              setPrimaryColor(`#${color.toHex()}`);
            }}
          />
        </h3>
        <ThemeColor />
      </Flex>
      <Flex className={flexCls}>
        <h3 className={h3Cls}>圆角</h3>
      </Flex>
    </Flex>
  );
}

export default Index;
