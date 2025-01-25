import { FlatList } from 'react-native';
import CustomLink from '@/components/molecules/CustomLink';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';

type Item = { href: string; text: string };
type Props = { mainMenu: Item[] };

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
