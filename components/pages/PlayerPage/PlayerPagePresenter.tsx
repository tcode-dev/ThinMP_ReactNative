import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/title/SecondaryTitle';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import BackButton from '@/components/molecules/button/BackButton';
import NextButton from '@/components/molecules/button/player/NextButton';
import PlaybackButton from '@/components/molecules/button/player/PlaybackButton';
import PrevButton from '@/components/molecules/button/player/PrevButton';
import RepeatButton from '@/components/molecules/button/player/RepeatButton';
import ShuffleButton from '@/components/molecules/button/player/ShuffleButton';
import FavoriteArtistButton from '@/components/molecules/button/register/FavoriteArtistButton';
import FavoriteSongButton from '@/components/molecules/button/register/FavoriteSongButton';
import PlaylistButton from '@/components/molecules/button/register/PlaylistButton';
import PageLayout from '@/components/molecules/PageLayout';
import SeekBar from '@/components/molecules/SeekBar';
import { getHeaderHeight, Style } from '@/constants/Style';
import { SongModel } from '@/model/SongModel';

export type Props = {
  backgroundColor: string;
  imageSize: number;
  isTablet: boolean;
  width: number;
} & SongModel;

const PlayerPagePresenter: React.FC<Props> = ({ name, artistName, imageId, backgroundColor, imageSize, isTablet, width }) => (
  <PageLayout>
    <View style={styles.container}>
      <ArtworkImage imageId={imageId} width={width} height={width} blurRadius={30} style={styles.background} />
      <View style={[styles.frame, isTablet && styles.tablet]}>
        <View style={[styles.firstView, { width, height: width }]}>
          <LinearGradient colors={['transparent', backgroundColor]} style={[styles.linearGradient, { height: '50%' }]} />
          <View style={styles.artwork}>
            <ArtworkImage imageId={imageId} width={imageSize} height={imageSize} borderRadius={4} />
          </View>
        </View>
        <View style={styles.titleView}>
          <PrimaryTitle style={[styles.title, { height: Style.rowHeight, lineHeight: Style.rowHeight }]}>{name}</PrimaryTitle>
          <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
        </View>
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <View style={styles.contentView}>
          <SeekBar />
          <View style={styles.buttonTopBlock}>
            <PrevButton />
            <PlaybackButton />
            <NextButton />
          </View>
          <View style={styles.buttonBottomBlock}>
            <RepeatButton />
            <ShuffleButton />
            <FavoriteArtistButton />
            <FavoriteSongButton />
            <PlaylistButton />
          </View>
        </View>
      </View>
    </View>
  </PageLayout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    position: 'absolute',
  },
  frame: {
    flex: 1,
    position: 'relative',
  },
  tablet: {},
  firstView: {
    position: 'relative',
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: getHeaderHeight() - 50,
    zIndex: 1,
  },
  artwork: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  buttonTopBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonBottomBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  description: {
    textAlign: 'center',
  },
  linearGradient: {
    bottom: -10,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  title: {
    textAlign: 'center',
  },
  titleView: {
    top: -25,
    paddingRight: 40,
    paddingLeft: 40,
  },
});

export default PlayerPagePresenter;
