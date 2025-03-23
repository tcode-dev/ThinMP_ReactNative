import { FlatList } from 'react-native';
import PlainListItem from '@/components/molecules/listItem/PlainListItem';
import { MainMenuModel } from '@/model/MainMenuModel';

type Props = { list: MainMenuModel[] };

const MainMenuEditPresenter: React.FC<Props> = ({ list }) => (
  <FlatList
    data={list}
    renderItem={({ item }) => (
      <PlainListItem>{item.text}</PlainListItem>
    )}
  />
);

export default MainMenuEditPresenter;
