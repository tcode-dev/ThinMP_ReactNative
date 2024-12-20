import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AlbumProps } from 'audio';
import PageLayout from '@/components/atoms/PageLayout';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import SongList, { Props as SongListProps } from '@/components/organisms/SongList';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import MiniPlayer from '@/components/organisms/MiniPlayer';

type Props = {
  albumDetail: AlbumProps;
  size: number;
  backgroundColor: string;
} & SongListProps;

const AlbumDetailPagePresenter: React.FC<Props> = ({ albumDetail, size, backgroundColor, play }) => {
  return (
    <PageLayout>
      <CollapsingToolbar
        title={albumDetail.name}
        description={albumDetail.artistName}
        components={[<SongList play={play} />]}
        background={
          <View style={styles.container}>
            <ArtworkImage imageId={albumDetail.imageId} width={size} height={size} />
            <LinearGradient colors={['transparent', backgroundColor]} style={[styles.linearGradient, { height: size * 0.5 }]} />
          </View>
        }
      />
      <MiniPlayer />
    </PageLayout>
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
});

export default AlbumDetailPagePresenter;
