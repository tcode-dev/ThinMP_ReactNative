import PlainListItem from '@/components/molecules/PlainListItem';
import { MainMenuMap } from '@/constants/MainMenuMap';
import { Link } from 'expo-router';
import { FlatList } from 'react-native';

const MainMenu = () => {
  return (
    <FlatList
      data={MainMenuMap}
      renderItem={({ item }) => (
        <Link href={item.href}>
          <PlainListItem>{item.text}</PlainListItem>
        </Link>
      )}
    />
  );
};

export default MainMenu;
