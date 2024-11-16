import { Animated, View, StyleSheet } from 'react-native';
import { ArtistDetailProps, AlbumProps, SongProps } from 'audio';
import SongListItem from '@/components/molecules/SongListItem';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';
import { LinearGradient } from 'expo-linear-gradient';
import StickyHeader, { Props as StickyHeaderProps } from '@/components/organisms/common/StickyHeader';
import StickyTitle from '@/components/organisms/common/StickyTitle';

export const TITLE_BOTTOM_POSITION = 50;

type Props = {
  artistDetail: ArtistDetailProps;
  description: string;
  albums: AlbumProps[];
  songs: SongProps[];
  size: number;
  titleHeight: number;
  scrollY: Animated.Value;
} & Pick<StickyHeaderProps, 'endPoint'>;

const ArtistDetailPresenter: React.FC<Props> = ({ artistDetail, description, albums, songs, size, titleHeight, scrollY, endPoint }) => {
  return (
    <View style={styles.container}>
      <StickyHeader title={artistDetail.name} scrollY={scrollY} endPoint={endPoint} />
      <Animated.FlatList
        data={songs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <SongListItem {...item} />}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
        scrollEventThrottle={100}
        ListHeaderComponent={
          <View style={styles.firstView}>
            <ArtworkImage imageId={artistDetail.imageId} size={size} borderRadius={0} />
            <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size * 0.5 }]} />
            <StickyTitle scrollY={scrollY} endPoint={endPoint}>
              <PrimaryTitle style={[styles.title, { height: titleHeight, lineHeight: titleHeight }]}>{artistDetail.name}</PrimaryTitle>
            </StickyTitle>
            <SecondaryTitle style={styles.description}>{description}</SecondaryTitle>
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstView: {
    position: 'relative',
  },
  artwork: {},
  title: {
    position: 'absolute',
    right: 0,
    bottom: TITLE_BOTTOM_POSITION,
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
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  footer: {
    height: 500,
  },
});

export default ArtistDetailPresenter;
