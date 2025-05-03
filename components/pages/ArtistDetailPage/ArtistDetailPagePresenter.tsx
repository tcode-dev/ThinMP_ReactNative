import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import ArtistDetailMenuButton from '@/components/molecules/button/menu/ArtistDetailMenuButton';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import PageLayout from '@/components/molecules/PageLayout';
import AlbumTitle from '@/components/molecules/title/AlbumTitle';
import SongTitle from '@/components/molecules/title/SongTitle';
import AlbumList from '@/components/organisms/list/AlbumList';
import { ArtistSongList, Props as SongListProps } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import { ArtistModel } from '@/model/ArtistModel';

type Props = {
  artistDetail: ArtistModel;
  description: string;
  size: number;
  backgroundColor: string;
} & SongListProps;

const ArtistDetailPagePresenter: React.FC<Props> = ({ artistDetail, description, size, backgroundColor, play }) => (
  <PageLayout>
    <CollapsingToolbar
      title={artistDetail.name}
      description={description}
      components={[<AlbumTitle key={0} />, <AlbumList key={1} />, <SongTitle key={2} />, <ArtistSongList play={play} key={3} />]}
      menu={<ArtistDetailMenuButton />}
      background={
        <View style={styles.container}>
          <ArtworkImage imageId={artistDetail.imageId} width={size} height={size} blurRadius={30} />
          <LinearGradient colors={['transparent', backgroundColor]} style={[styles.linearGradient, { height: size }]} />
          <View style={styles.artistImage}>
            <ArtworkImage imageId={artistDetail.imageId} width={size / 3} height={size / 3} borderRadius={size / 3 / 2} />
          </View>
        </View>
      }
    />
    <MiniPlayer />
  </PageLayout>
);

const styles = StyleSheet.create({
  artistImage: {
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
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

export default ArtistDetailPagePresenter;
