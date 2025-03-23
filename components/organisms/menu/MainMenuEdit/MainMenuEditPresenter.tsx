import { FlatList } from 'react-native';
import { MainMenuModel } from '@/model/MainMenuModel';
import CheckBoxListItem from '@/components/molecules/listItem/CheckBoxListItem';

type Props = { list: MainMenuModel[] };

const MainMenuEditPresenter: React.FC<Props> = ({ list }) => (
  <FlatList
    data={list}
    renderItem={({ item }) => (
      <CheckBoxListItem isChecked={item.visibility} onPress={() => {}}>{item.text}</CheckBoxListItem>
    )}
  />
);

export default MainMenuEditPresenter;
