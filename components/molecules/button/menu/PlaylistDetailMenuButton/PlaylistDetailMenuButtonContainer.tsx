import { useLocalSearchParams } from 'expo-router';
import MenuButton from '@/components/molecules/button/menu/MenuButton';
import { ContextMenuCategory } from '@/store/contextMenuStore';

const PlaylistDetailMenuButtonContainer = () => {
  const { id }: { id: string } = useLocalSearchParams();
  const list = [{ category: ContextMenuCategory.PlaylistEdit, id }];

  return <MenuButton list={list} />;
};

export default PlaylistDetailMenuButtonContainer;
