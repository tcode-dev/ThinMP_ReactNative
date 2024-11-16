import { FlatList } from 'react-native';
import { SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';

type Props = {
  songs: SongProps[];
  scrollEnabled: boolean;
};

const SongListPresenter: React.FC<Props> = ({ songs, scrollEnabled }) => {
  return <FlatList data={songs} renderItem={({ item }) => <SongListItem {...item} />} scrollEnabled={scrollEnabled} />;
};

export default SongListPresenter;
