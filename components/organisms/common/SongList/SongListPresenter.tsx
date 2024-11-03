import { Text, FlatList } from 'react-native';
import { SongsProps } from 'audio';

type Props = {
  songs: SongsProps[];
};

const SongListPresenter: React.FC<Props> = ({ songs }) => {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}

export default SongListPresenter;
