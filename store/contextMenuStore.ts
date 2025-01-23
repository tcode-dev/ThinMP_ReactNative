import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type ContextMenuBuilderProps = () => { label: string, callback: () => void };
export type ContextMenuOpenProps = {
  isOpen: boolean,
  builders: ContextMenuBuilderProps[];
  position: { top: number, right: number },
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
