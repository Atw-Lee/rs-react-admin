import { useAppStore } from '@/store';
import { Drawer, Segmented } from '@/components';
import { useIntl } from 'react-intl';
import { useMemo, useState } from 'react';
import Appearance from './components/Appearance';

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
    <Drawer title="Basic Drawer" onClose={onClose} open={open}>
      <Segmented options={options} block value={value} onChange={setValue} />
      <Appearance />
    </Drawer>
  );
}

export default Index;
