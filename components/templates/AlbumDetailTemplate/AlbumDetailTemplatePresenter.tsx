import { Animated, View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AlbumProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';
import StickyHeader, { Props as StickyHeaderProps } from '@/components/organisms/StickyHeader';
import StickyTitle from '@/components/organisms/StickyTitle';
import SongList from '@/components/organisms/SongList';

export const TITLE_BOTTOM_POSITION = 50;

type Props = {
  albumDetail: AlbumProps;
  size: number;
  titleHeight: number;
  scrollY: Animated.Value;
} & Pick<StickyHeaderProps, 'endPoint'>;

const AlbumDetailPresenter: React.FC<Props> = ({ albumDetail, size, titleHeight, scrollY, endPoint }) => {
  return (
    <ScrollView style={styles.container} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })} scrollEventThrottle={100}>
      <StickyHeader title={albumDetail.name} scrollY={scrollY} endPoint={endPoint} />
      <View style={styles.firstView}>
        <ArtworkImage imageId={albumDetail.imageId} width={size} height={size} />
        <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size * 0.5 }]} />
        <StickyTitle scrollY={scrollY} endPoint={endPoint}>
          <PrimaryTitle style={[styles.title, { height: titleHeight, lineHeight: titleHeight }]}>{albumDetail.name}</PrimaryTitle>
        </StickyTitle>
        <SecondaryTitle style={styles.description}>{albumDetail.artistName}</SecondaryTitle>
      </View>
      <SongList scrollEnabled={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  firstView: {
    position: 'relative',
  },
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
});

export default AlbumDetailPresenter;
