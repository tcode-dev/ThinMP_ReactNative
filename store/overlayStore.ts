import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const overlayAtom = atom(false);

export const useOverlayStore = () => {
  const [isOverlayEnabled, setIsOverlayEnabled] = useAtom(overlayAtom);
  const enableOverlay = useCallback(() => setIsOverlayEnabled(true), [setIsOverlayEnabled]);
  const disableOverlay = useCallback(() => setIsOverlayEnabled(false), [setIsOverlayEnabled]);

  return { isOverlayEnabled, enableOverlay, disableOverlay };
};
