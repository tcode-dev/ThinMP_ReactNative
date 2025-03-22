import { FlatList } from 'react-native';
import CustomLink from '@/components/molecules/CustomLink';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { MainMenuModel } from '@/model/MainMenuModel';

type Props = { list: MainMenuModel[] };

const MainMenuPresenter: React.FC<Props> = ({ list }) => (
  <FlatList
    data={list}
    renderItem={({ item }) => (
      <CustomLink href={item.href}>
        <PlainListItem>{item.text}</PlainListItem>
      </CustomLink>
    )}
  />
);

export default MainMenuPresenter;
