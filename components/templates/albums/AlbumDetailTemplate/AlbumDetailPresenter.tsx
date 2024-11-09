import { Animated, View, Text, StyleSheet } from 'react-native';
import { AlbumProps, SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';
import ArtworkImage from '@/components/molecules/ArtworkImage';

type Props = {
  albumDetail: AlbumProps;
  songs: SongProps[];
  scrollY: Animated.Value;
  width: number;
};

const AlbumDetailPresenter: React.FC<Props> = ({ albumDetail, songs, scrollY, width }) => {
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SongListItem {...item} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={100}
        ListHeaderComponent={
          <View>
            <ArtworkImage imageId={albumDetail.imageId} size={width} borderRadius={0} />
            <Text style={styles.title}>{albumDetail.name}</Text>
            <Text style={styles.artist}>{albumDetail.artistName}</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    height: 100,
  },
  artist: {
    fontSize: 18,
    color: 'gray',
    height: 100,
  },
});

export default AlbumDetailPresenter;
