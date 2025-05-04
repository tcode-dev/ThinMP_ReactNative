import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { useArtistId } from '@/hooks/useArtistId';
import { ContextMenuCategory, ContextMenuProps } from '@/store/contextMenuStore';

const ArtistDetailMenuButtonContainer = () => {
  const { artistId } = useArtistId();
  const list: ContextMenuProps[] = [
    { category: ContextMenuCategory.ShortcutArtist, id: artistId },
    { category: ContextMenuCategory.FavoriteArtist, id: artistId },
  ];

  return <MenuButton list={list} />;
};

export default ArtistDetailMenuButtonContainer;
