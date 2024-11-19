import { FlatList, FlatListProps } from 'react-native';
import { SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';

export type Props = {
  songs: SongProps[];
  scrollEnabled?: FlatListProps<any>['scrollEnabled'];
};

const SongListPresenter: React.FC<Props> = ({ songs, scrollEnabled = false }) => {
  return <FlatList data={songs} renderItem={({ item }) => <SongListItem {...item} />} scrollEnabled={scrollEnabled} />;
};

export default SongListPresenter;
