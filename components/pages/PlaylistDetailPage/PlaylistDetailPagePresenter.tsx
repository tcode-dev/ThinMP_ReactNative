import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import PlaylistDetailMenuButton from '@/components/molecules/button/menu/PlaylistDetailMenuButton';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import PageLayout from '@/components/molecules/PageLayout';
import { PlaylistSongList } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';

type Props = {
  playlistDetail: PlaylistModel;
  imageId: string;
  size: number;
  backgroundColor: string;
};

const PlaylistDetailPagePresenter: React.FC<Props> = ({ playlistDetail, imageId, size, backgroundColor }) => (
  <PageLayout>
    <CollapsingToolbar
      title={playlistDetail.name}
      description={localize('playlist')}
      components={[<PlaylistSongList key={0} />]}
      menu={<PlaylistDetailMenuButton />}
      background={
        <View style={styles.container}>
          <ArtworkImage imageId={imageId} width={size} height={size} />
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
    alignItems: 'center',
  },
  linearGradient: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
});

export default PlaylistDetailPagePresenter;
