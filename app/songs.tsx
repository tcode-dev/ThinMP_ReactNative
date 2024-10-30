import { FlatList, Text, View } from 'react-native';
import * as Audio from 'audio';
import { useEffect, useState } from 'react';

const SongsPage = () => {
  const [songs, setSongs] = useState<Audio.SongsProps[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const result: Audio.SongsProps[] = await Audio.getAllSongs();
        setSongs(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <View>
      <Text>Songs</Text>
      <FlatList
        data={songs}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

export default SongsPage;
