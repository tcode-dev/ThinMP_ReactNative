import { FlatList } from 'react-native';
import CustomLink from '@/components/molecules/CustomLink';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { MenuItem } from '@/constants/MainMenuMap';

type Props = { mainMenu: MenuItem[] };

const MainMenuPresenter: React.FC<Props> = ({ mainMenu }) => (
  <FlatList
    data={mainMenu}
    renderItem={({ item }) => (
      <CustomLink href={item.href}>
        <PlainListItem>{item.text}</PlainListItem>
      </CustomLink>
    )}
  />
);

export default MainMenuPresenter;
