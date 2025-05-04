import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { useArtistId } from '@/hooks/useArtistId';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const ArtistDetailMenuButtonContainer = () => {
  const { artistId } = useArtistId();
  const list = [
    { category: ContextMenuCategory.ShortcutArtist, artistId },
    { category: ContextMenuCategory.FavoriteArtist, artistId },
  ];

  return <MenuButton list={list} />;
};

export default ArtistDetailMenuButtonContainer;
