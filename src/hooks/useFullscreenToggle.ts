import { useRef } from 'react';
import { useFullscreen, useToggle } from 'react-use';

export function useFullscreenToggle(element?: React.RefObject<Element>) {
  const ref = useRef(document.body);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(element ?? ref, show, {
    onClose: () => toggle(false),
  });

  return { isFullscreen, toggle };
}
