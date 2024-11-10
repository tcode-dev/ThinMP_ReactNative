import { Animated, View, StyleSheet } from 'react-native';
import { AlbumProps, SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';

type Props = {
  albumDetail: AlbumProps;
  songs: SongProps[];
  scrollY: Animated.Value;
  width: number;
  titleHeight: number;
};

const AlbumDetailPresenter: React.FC<Props> = ({ albumDetail, songs, scrollY, width, titleHeight }) => {
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
          <View style={styles.firstView}>
            <ArtworkImage imageId={albumDetail.imageId} size={width} borderRadius={0} />
            <PrimaryTitle style={[styles.title, {height: titleHeight}]}>{albumDetail.name}</PrimaryTitle>
            <SecondaryTitle style={styles.description}>{albumDetail.artistName}</SecondaryTitle>
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstView: {
    position: 'relative'
  },
  artwork: {

  },
  title: {
    position: 'absolute',
    right: 0,
    bottom: 50,
    left: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  description: {
    position: 'absolute',
    right: 0,
    bottom: 25,
    left: 0,
    textAlign: 'center',
  },
  footer: {
    height: 500,
  }
});

export default AlbumDetailPresenter;
