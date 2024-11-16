import { Animated, View, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArtistDetailProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PrimaryTitle from '@/components/atoms/Title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/Title/SecondaryTitle';
import StickyHeader, { Props as StickyHeaderProps } from '@/components/organisms/common/StickyHeader';
import StickyTitle from '@/components/organisms/common/StickyTitle';
import AlbumList from '@/components/organisms/common/AlbumList';
import SongList from '@/components/organisms/common/SongList';
import SectionTitle from '@/components/atoms/Title/SectionTitle';

export const TITLE_BOTTOM_POSITION = 50;

type Props = {
  artistDetail: ArtistDetailProps;
  description: string;
  size: number;
  titleHeight: number;
  scrollY: Animated.Value;
} & Pick<StickyHeaderProps, 'endPoint'>;

const ArtistDetailPresenter: React.FC<Props> = ({ artistDetail, description, size, titleHeight, scrollY, endPoint }) => {
  return (
    <ScrollView style={styles.container} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })} scrollEventThrottle={100}>
      <StickyHeader title={artistDetail.name} scrollY={scrollY} endPoint={endPoint} />
      <View style={styles.firstView}>
        <ArtworkImage imageId={artistDetail.imageId} width={size} height={size} blurRadius={50} />
        <View style={styles.gradient} />
        <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size * 0.5 }]} />
        <View style={styles.artistImage}>
          <ArtworkImage imageId={artistDetail.imageId} width={size / 3} height={size / 3} borderRadius={(size / 3) / 2} />
        </View>
        <StickyTitle scrollY={scrollY} endPoint={endPoint}>
          <PrimaryTitle style={[styles.title, { height: titleHeight, lineHeight: titleHeight }]}>{artistDetail.name}</PrimaryTitle>
        </StickyTitle>
        <SecondaryTitle style={styles.description}>{description}</SecondaryTitle>
      </View>
      <SectionTitle>Albums</SectionTitle>
      <AlbumList scrollEnabled={false} />
      <SectionTitle>Songs</SectionTitle>
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
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    opacity: 0.3,
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  artistImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default ArtistDetailPresenter;
