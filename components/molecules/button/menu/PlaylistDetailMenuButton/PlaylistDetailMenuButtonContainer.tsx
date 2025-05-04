import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { usePlaylistId } from '@/hooks/usePlaylistId';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const PlaylistDetailMenuButtonContainer = () => {
  const { playlistId } = usePlaylistId();
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.PlaylistEdit, id: playlistId }];

  return <MenuButton list={list} />;
};

export default PlaylistDetailMenuButtonContainer;
