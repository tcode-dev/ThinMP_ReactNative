import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';

import PageLayout from '@/components/atoms/PageLayout';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import AlbumList from '@/components/organisms/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import SongList, { Props as SongListProps } from '@/components/organisms/SongList';
import { ArtistDetailProps } from 'audio';

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
