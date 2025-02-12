import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import PageLayout from '@/components/molecules/PageLayout';
import SongList, { Props as SongListProps } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import localize from '@/localize';
import { PlaylistModel } from '@/model/PlaylistModel';

type Props = {
  playlistDetail: PlaylistModel;
  size: number;
  backgroundColor: string;
} & SongListProps;

const PlaylistDetailPagePresenter: React.FC<Props> = ({ playlistDetail, size, backgroundColor, play }) => (
  <PageLayout>
    <CollapsingToolbar
      title={playlistDetail.name}
      description={localize('playlist')}
      components={[<SongList play={play} key={0} />]}
      background={
        <View style={styles.container}>
          <ArtworkImage imageId={playlistDetail.imageId} width={size} height={size} />
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

export default PlaylistDetailPagePresenter;
