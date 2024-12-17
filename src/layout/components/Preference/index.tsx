import { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import { Segmented } from 'antd';
import { useAppStore } from '@/store';
import { Drawer } from '@/components';
import Appearance from './components/Appearance';
import classNames from 'classnames';

function Index() {
  const open = useAppStore((state) => state.isPreferencePanelVisible);
  const setOpen = useAppStore((state) => state.setPreferencePanelVisible);
  const onClose = () => {
    setOpen(false);
  };
  const intl = useIntl();
  const [value, setValue] = useState<string | number>('appearance');
  const preferenceTypes = useMemo(
    () => ['appearance', 'layout', 'general'],
    [],
  );
  const options = useMemo(
    () =>
      preferenceTypes.map((preference) => ({
        value: preference,
        label: intl.formatMessage({ id: `app.preference.${preference}` }),
      })),
    [intl, preferenceTypes],
  );

  return (
    <Drawer
      title={intl.formatMessage({ id: 'app.preference' })}
      onClose={onClose}
      open={open}
    >
      <Segmented options={options} block value={value} onChange={setValue} />
      <Appearance className={value === 'appearance' ? 'block' : 'hidden'} />
    </Drawer>
  );
}

export default Index;
