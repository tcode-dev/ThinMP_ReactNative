import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type ContextMenuOpenProps = {
  isOpen: boolean,
  list: { label: string, callback: () => void }[],
  measure: { x: number, y: number, width: number, heigh: number },
}
export type ContextMenuCloseProps = {
  isOpen: false,
}
export type Props = ContextMenuOpenProps | ContextMenuCloseProps;

const contextMenuAtom = atom<Props>({ isOpen: false });

export const useContextMenuStore = () => {
  const [contextMenu, setState] = useAtom(contextMenuAtom);
  const setContextMenu = useCallback((props: ContextMenuOpenProps) => setState(props), [setState]);
  const resetContextMenu = useCallback(() => setState({ isOpen: false }), [setState]);

  return { contextMenu, setContextMenu, resetContextMenu };
};
