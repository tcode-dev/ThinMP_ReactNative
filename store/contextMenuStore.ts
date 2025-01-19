import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type Props = {
  isOpen: boolean,
  list: { label: string, callback: () => void }[],
  position: { x: number, y: number },
}

const contextMenuAtom = atom<Props>({ isOpen: false, list: [], position: { x: 0, y: 0 } });

export const useContextMenuStore = () => {
  const [contextMenu, setState] = useAtom(contextMenuAtom);
  const setContextMenu = useCallback((props: Props) => setState(props), [setState]);
  const resetContextMenu = useCallback(() => setState({ isOpen: false, list: [], position: { x: 0, y: 0 } }), [setState]);

  return { contextMenu, setContextMenu, resetContextMenu };
};
