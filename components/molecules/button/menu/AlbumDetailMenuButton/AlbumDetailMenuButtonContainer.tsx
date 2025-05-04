import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { useAlbumId } from '@/hooks/useAlbumId';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const AlbumDetailMenuButtonContainer = () => {
  const { albumId } = useAlbumId();
  const list = [{ category: ContextMenuCategory.ShortcutAlbum, id: albumId }];

  return <MenuButton list={list} />;
};

export default AlbumDetailMenuButtonContainer;
