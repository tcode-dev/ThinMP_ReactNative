import { useLocalSearchParams } from 'expo-router';
import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const ArtistDetailMenuButtonContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const list = [
    { category: ContextMenuCategory.ShortcutArtist, id },
    { category: ContextMenuCategory.FavoriteArtist, id },
  ];

  return <MenuButton list={list} />;
};

export default ArtistDetailMenuButtonContainer;
