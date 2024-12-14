import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SongProps } from '@/packages/audio/build';
import { PrimaryTitle, SecondaryTitle } from '@/components/atoms/Title';
import { Style } from '@/constants/Style';
import PageContainer from '@/components/atoms/PageContainer';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PlaybackButton from '@/components/molecules/button/PlaybackButton';
import PrevButton from '@/components/molecules/button/PrevButton';
import NextButton from '@/components/molecules/button/NextButton';
import RepeatButton from '@/components/molecules/button/RepeatButton';
import ShuffleButton from '@/components/molecules/button/ShuffleButton';
import FavoriteArtistButton from '@/components/molecules/button/FavoriteArtistButton';
import FavoriteSongButton from '@/components/molecules/button/FavoriteSongButton';
import PlaylistButton from '@/components/molecules/button/PlaylistButton';
import Seekbar from '@/components/molecules/Seekbar';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  bottom: number;
  width: number;
  imageSize: number;
} & SongProps;

const PlayerPagePresenter: React.FC<Props> = ({ name, artistName, imageId, width, imageSize, bottom }) => {
  return (
    <PageContainer>
      <View style={styles.firstView}>
        <ArtworkImage imageId={imageId} width={width} height={width} blurRadius={30} />
        <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: imageSize }]} />
        <View style={styles.artwork}>
          <ArtworkImage imageId={imageId} width={imageSize} height={imageSize} />
        </View>
      </View>
      <PrimaryTitle style={[styles.title, { height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{name}</PrimaryTitle>
      <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
      <Seekbar />
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
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  firstView: {
    position: 'relative',
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default PlayerPagePresenter;
