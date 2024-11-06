import { FlatList } from 'react-native';
import { SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';

type Props = {
  songs: SongProps[];
};

const SongListPresenter: React.FC<Props> = ({ songs }) => {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => <SongListItem {...item} />}
    />
  );
}

export default SongListPresenter;
