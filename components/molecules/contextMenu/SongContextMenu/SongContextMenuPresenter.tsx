import React from 'react';
import ContextMenu, { Props as ContextMenuProps } from '../ContextMenu';
import ContextMenuItem from '../ContextMenuItem';

type Props = Pick<ContextMenuProps, 'onPress' | 'children'>;

const SongContextMenuPresenter: React.FC<Props> = ({ onPress, children }) => (
  <ContextMenu menu={
    <>
      <ContextMenuItem>お気に入り</ContextMenuItem>
      <ContextMenuItem>playlist</ContextMenuItem>
    </>}
    onPress={onPress}
  >
    {children}
  </ContextMenu>
);

export default SongContextMenuPresenter;
