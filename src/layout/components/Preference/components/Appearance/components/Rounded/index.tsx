import { Slider } from 'antd';
import { useAppStore } from '@/store';

function Index() {
  const rounded = useAppStore((state) => state.rounded);
  const setRounded = useAppStore((state) => state.setRounded);

  return (
    <Slider
      className="m-0"
      value={rounded}
      onChange={setRounded}
      max={20}
      min={0}
    />
  );
}

export default Index;
