import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import PageLayout from '@/components/atoms/PageLayout';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import SongList, { Props as SongListProps } from '@/components/organisms/SongList';
import { AlbumProps } from 'audio';

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
        components={[<SongList play={play} key={0} />]}
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
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

export default AlbumDetailPagePresenter;
