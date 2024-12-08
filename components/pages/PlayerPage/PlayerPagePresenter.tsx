import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SongProps } from '@/packages/audio/build';
import PageContainer from '@/components/atoms/PageContainer';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import { PrimaryTitle, SecondaryTitle } from '@/components/atoms/Title';
import { Style } from '@/constants/Style';

export const TITLE_BOTTOM_POSITION = 50;

export type Props = {
  bottom: number;
  size: number;
} & SongProps;

const PlayerPagePresenter: React.FC<Props> = ({ name, artistName, imageId, size, bottom }) => {
  return (
    <PageContainer>
      <View style={styles.container}>
        <ArtworkImage imageId={imageId} width={size} height={size} blurRadius={30} />
        <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size }]} />
        <View style={styles.artistImage}>
          <ArtworkImage imageId={imageId} width={size / 3} height={size / 3} />
        </View>
        <PrimaryTitle style={[styles.title, { height: Style.headerTitleHeight, lineHeight: Style.headerTitleHeight }]}>{name}</PrimaryTitle>
        <SecondaryTitle style={styles.description}>{artistName}</SecondaryTitle>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  linearGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  artistImage: {
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
});

export default PlayerPagePresenter;
