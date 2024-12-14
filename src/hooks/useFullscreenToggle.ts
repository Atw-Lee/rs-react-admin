// hooks/useFullscreenToggle.ts
import { useRef } from 'react';
import { useFullscreen, useToggle } from 'react-use';

export function useFullscreenToggle() {
  const ref = useRef(document.body);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(ref, show, {
    onClose: () => toggle(false),
  });

  return { ref, isFullscreen, toggle };
}