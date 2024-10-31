import { Text, FlatList } from 'react-native';
import { SongsProps } from 'audio';
import { FC } from 'react';

type Props = {
  songs: SongsProps[];
};

const SongListPresenter: FC<Props> = ({ songs }) => {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}

export default SongListPresenter;
