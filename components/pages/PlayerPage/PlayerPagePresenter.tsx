import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SongProps } from '@/packages/audio/build';
import PageContainer from '@/components/atoms/PageContainer';
import ArtworkImage from '@/components/molecules/ArtworkImage';

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
});

export default PlayerPagePresenter;
