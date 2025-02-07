import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type ContextMenuBuilderProps = () => { label: string; callback: () => void };
export type ContextMenuOpenProps = {
  builders: ContextMenuBuilderProps[];
  position: { top: number; right: number };
};
export type ContextMenuCloseProps = {
  isOpen: boolean;
};
export type Props = ContextMenuOpenProps | ContextMenuCloseProps;

const contextMenuAtom = atom<Props>({ isOpen: false });

export const useContextMenuStore = () => {
  const [contextMenu, setState] = useAtom(contextMenuAtom);
  const openContextMenu = useCallback((props: ContextMenuOpenProps) => setState({isOpen: true, ...props}), [setState]);
  const closeContextMenu = useCallback(() => setState({ isOpen: false }), [setState]);

  return { contextMenu, openContextMenu, closeContextMenu };
};
