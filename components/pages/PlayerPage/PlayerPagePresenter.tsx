import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SongProps } from '@/packages/audio/build';
import { PrimaryTitle, SecondaryTitle } from '@/components/atoms/Title';
import { Style } from '@/constants/Style';
import PageLayout from '@/components/atoms/PageLayout';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import PrevButton from '@/components/molecules/button/PrevButton';
import NextButton from '@/components/molecules/button/NextButton';
import RepeatButton from '@/components/molecules/button/RepeatButton';
import ShuffleButton from '@/components/molecules/button/ShuffleButton';
import FavoriteArtistButton from '@/components/molecules/button/FavoriteArtistButton';
import FavoriteSongButton from '@/components/molecules/button/FavoriteSongButton';
import PlaylistButton from '@/components/molecules/button/PlaylistButton';
import SeekBar from '@/components/molecules/SeekBar';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  bottom: number;
  width: number;
  imageSize: number;
  backgroundColor: string;
} & SongProps;

const PlayerPagePresenter: React.FC<Props> = ({ name, artistName, imageId, width, imageSize, bottom, backgroundColor }) => {
  return (
    <PageLayout>
      <View style={styles.container}>
        <View style={styles.firstView}>
          <ArtworkImage imageId={imageId} width={width} height={width} blurRadius={30} />
          <LinearGradient colors={['transparent', backgroundColor]} style={[styles.linearGradient, { height: imageSize }]} />
          <View style={styles.artwork}>
            <ArtworkImage imageId={imageId} width={imageSize} height={imageSize} />
          </View>
        </View>
        <View style={styles.titleView}>
          <PrimaryTitle style={[styles.title, { height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{name}</PrimaryTitle>
          <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
        </View>
        <View style={styles.contentView}>
          <SeekBar />
          <View style={styles.buttonBlock}>
            <PrevButton />
            <PlaybackButton />
            <NextButton />
          </View>
          <View style={[styles.buttonBlock]}>
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
  },
  firstView: {
    position: 'relative',
  },
  titleView: {
    top: -25,
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  artwork: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  buttonBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default PlayerPagePresenter;
