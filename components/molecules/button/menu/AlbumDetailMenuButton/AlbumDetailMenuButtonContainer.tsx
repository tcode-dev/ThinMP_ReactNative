import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { useAlbumId } from '@/hooks/useAlbumId';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const AlbumDetailMenuButtonContainer = () => {
  const { albumId } = useAlbumId();
  const list: ContextMenuProps[] = [{ category: ContextMenuCategory.ShortcutAlbum, id: albumId }];

  return <MenuButton list={list} />;
};

export default AlbumDetailMenuButtonContainer;
