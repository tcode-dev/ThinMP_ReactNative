import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import AlbumDetailMenuButton from '@/components/molecules/button/menu/AlbumDetailMenuButton';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import PageLayout from '@/components/molecules/PageLayout';
import SongList, { Props as SongListProps } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import { AlbumModel } from '@/model/AlbumModel';

type Props = {
  albumDetail: AlbumModel;
  size: number;
  backgroundColor: string;
} & SongListProps;

const AlbumDetailPagePresenter: React.FC<Props> = ({ albumDetail, size, backgroundColor, play }) => (
  <PageLayout>
    <CollapsingToolbar
      title={albumDetail.name}
      description={albumDetail.artistName}
      components={[<SongList play={play} />]}
      menu={<AlbumDetailMenuButton />}
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
