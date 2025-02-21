import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import PrimaryTitle from '@/components/atoms/title/PrimaryTitle';
import SecondaryTitle from '@/components/atoms/title/SecondaryTitle';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import FavoriteArtistButton from '@/components/molecules/button/FavoriteArtistButton';
import FavoriteSongButton from '@/components/molecules/button/FavoriteSongButton';
import NextButton from '@/components/molecules/button/NextButton';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import PlaylistButton from '@/components/molecules/button/PlaylistButton';
import PrevButton from '@/components/molecules/button/PrevButton';
import RepeatButton from '@/components/molecules/button/RepeatButton';
import ShuffleButton from '@/components/molecules/button/ShuffleButton';
import SeekBar from '@/components/molecules/SeekBar';
import { Style } from '@/constants/Style';
import { SongModel } from '@/model/SongModel';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  width: number;
  imageSize: number;
  backgroundColor: string;
} & SongModel;

const PlayerPagePresenter: React.FC<Props> = ({ name, artistName, imageId, width, imageSize, backgroundColor }) => (
  <PageLayout>
    <View style={styles.container}>
      <View style={styles.firstView}>
        <ArtworkImage imageId={imageId} width={width} height={width} blurRadius={30} />
        <LinearGradient colors={['transparent', backgroundColor]} style={[styles.linearGradient, { height: imageSize }]} />
        <View style={styles.artwork}>
          <ArtworkImage imageId={imageId} width={imageSize} height={imageSize} borderRadius={4} />
        </View>
      </View>
      <View style={styles.titleView}>
        <PrimaryTitle style={[styles.title, { height: Style.rowHeight, lineHeight: Style.rowHeight }]}>{name}</PrimaryTitle>
        <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
      </View>
      <View style={styles.contentView}>
        <SeekBar />
        <View style={styles.buttonBlock}>
          <PrevButton />
          <PlaybackButton />
          <NextButton />
        </View>
        <View style={styles.buttonBlock}>
          <RepeatButton />
          <ShuffleButton />
          <FavoriteArtistButton />
          <FavoriteSongButton />
          <PlaylistButton />
        </View>
      </View>
    </View>
  </PageLayout>
);

const styles = StyleSheet.create({
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
  buttonBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  description: {
    textAlign: 'center',
  },
  firstView: {
    position: 'relative',
  },
  linearGradient: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  title: {
    textAlign: 'center',
  },
  titleView: {
    top: -25,
  },
});

export default PlayerPagePresenter;
