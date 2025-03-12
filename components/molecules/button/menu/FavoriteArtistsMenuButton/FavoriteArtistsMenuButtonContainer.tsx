import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';
import { useLocalSearchParams } from 'expo-router';

const FavoriteArtistsMenuButtonContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const list = [{ category: ContextMenuCategory.ShortcutAlbum, id: id }];

  return <MenuButton list={list} />;
};

export default FavoriteArtistsMenuButtonContainer;
