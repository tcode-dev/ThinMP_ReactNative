import { FlatList } from 'react-native';
import { MenuItem } from '@/constants/MainMenuMap';
import PlainListItem from '@/components/molecules/PlainListItem';
import CustomLink from '@/components/molecules/CustomLink';

type Props = { mainMenu: MenuItem[] };

const MainMenuPresenter: React.FC<Props> = ({ mainMenu }) => {
  return (
    <FlatList
      data={mainMenu}
      renderItem={({ item }) => (
        <CustomLink href={item.href}>
          <PlainListItem>{item.text}</PlainListItem>
        </CustomLink>
      )}
    />
  );
};

export default MainMenuPresenter;
