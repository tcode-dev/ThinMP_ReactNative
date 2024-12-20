import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArtistDetailProps } from 'audio';
import PageLayout from '@/components/atoms/PageLayout';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import AlbumList from '@/components/organisms/AlbumList';
import SongList, { Props as SongListProps } from '@/components/organisms/SongList';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import MiniPlayer from '@/components/organisms/MiniPlayer';

type Props = {
  artistDetail: ArtistDetailProps;
  description: string;
  size: number;
  backgroundColor: string;
} & SongListProps;

const ArtistDetailPagePresenter: React.FC<Props> = ({ artistDetail, description, size, backgroundColor, play }) => {
  return (
    <PageLayout>
      <CollapsingToolbar
        title={artistDetail.name}
        description={description}
        components={[<SectionTitle>Albums</SectionTitle>, <AlbumList />, <SectionTitle>Songs</SectionTitle>, <SongList play={play} />]}
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

export default ArtistDetailPagePresenter;
