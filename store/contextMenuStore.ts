import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export type ContextMenuBuilderProps = () => { label: string; callback: () => void };
export type ContextMenuOpenProps = {
  isOpen: true;
  builders: ContextMenuBuilderProps[];
  position: { top: number; right: number };
};
export type ContextMenuCloseProps = {
  isOpen: false;
};
export type Props = ContextMenuOpenProps | ContextMenuCloseProps;

const contextMenuAtom = atom<Props>({ isOpen: false });

export const useContextMenuStore = () => {
  const [contextMenu, setState] = useAtom(contextMenuAtom);
  const openContextMenu = useCallback((props: Omit<ContextMenuOpenProps, 'isOpen'>) => setState({...props, isOpen: true}), [setState]);
  const closeContextMenu = useCallback(() => setState({ isOpen: false }), [setState]);

  return { contextMenu, openContextMenu, closeContextMenu };
};
