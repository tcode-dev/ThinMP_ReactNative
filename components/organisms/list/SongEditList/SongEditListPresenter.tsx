import { FlatList } from 'react-native';
import { SongModel } from '@/model/SongModel';
import SongEditListItem from '@/components/molecules/listItem/SongEditListItem';

export type Props = {
  songs: SongModel[];
};

const SongEditListPresenter: React.FC<Props> = ({ songs }) => (
  <FlatList
    data={songs}
    renderItem={({ item }) => <SongEditListItem {...item} />}
    scrollEnabled={false}
    keyExtractor={(item) => item.id.toString()}
  />
);

export default SongEditListPresenter;
