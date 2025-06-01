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
import { getHeaderHeight } from '@/constants/Style';
import { SongModel } from '@/model/SongModel';

export type Props = {
  backgroundSize: number;
  frameHeight: number;
  frameWidth: number;
  imageSize: number;
  isTablet: boolean;
  linearGradientEndColor: string;
  linearGradientStartColor: string;
  overlayColor: string;
} & SongModel;

const PlayerPagePresenter: React.FC<Props> = ({
  artistName,
  backgroundSize,
  frameHeight,
  frameWidth,
  imageId,
  imageSize,
  isTablet,
  linearGradientEndColor,
  linearGradientStartColor,
  name,
  overlayColor,
}) => (
  <PageLayout>
    <View style={styles.container}>
      <ArtworkImage imageId={imageId} width={backgroundSize} height={backgroundSize} blurRadius={30} style={styles.background} />
      <View style={styles.backButton}>
        <BackButton />
      </View>
      <View style={[styles.frame, { width: frameWidth, height: frameHeight, backgroundColor: overlayColor }]}>
        <View style={[styles.firstView, { width: frameWidth }, isTablet && styles.tabletFirstView]}>
          {!isTablet && <LinearGradient colors={[linearGradientStartColor, linearGradientEndColor]} style={[styles.linearGradient, { height: '50%' }]} />}
          <View style={styles.artwork}>
            <ArtworkImage imageId={imageId} width={imageSize} height={imageSize} borderRadius={4} />
          </View>
        </View>
        <View style={styles.titleView}>
          <PrimaryTitle style={[styles.title]}>{name}</PrimaryTitle>
          <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
        </View>
        <View style={styles.contentView}>
          <View style={isTablet && styles.seekBar}>
            <SeekBar />
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  frame: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  firstView: {
    position: 'relative',
    flex: 1,
  },
  tabletFirstView: {
    paddingTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: getHeaderHeight() - 50,
    left: 0,
    zIndex: 1,
  },
  artwork: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
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
    paddingBottom: 20,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
  linearGradient: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  titleView: {
    paddingHorizontal: 40,
    width: '100%',
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  seekBar: {
    paddingHorizontal: 20,
  },
});

export default PlayerPagePresenter;
