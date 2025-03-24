import { FlatList } from 'react-native';
import { MainMenuModel } from '@/model/MainMenuModel';
import CheckBoxListItem from '@/components/molecules/listItem/CheckBoxListItem';

type Props = { list: MainMenuModel[], onPress: (index: number) => void };

const MainMenuEditPresenter: React.FC<Props> = ({ list, onPress }) => (
  <FlatList
    data={list}
    renderItem={({ item, index }) => (
      <CheckBoxListItem isChecked={item.visibility} onPress={() => onPress(index)}>{item.text}</CheckBoxListItem>
    )}
  />
);

export default MainMenuEditPresenter;
