import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArtistDetailProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';
import AlbumList from '@/components/organisms/AlbumList';
import SongList from '@/components/organisms/SongList';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import PageContainer from '@/components/atoms/PageContainer';

type Props = {
  artistDetail: ArtistDetailProps;
  description: string;
  size: number;
};

const ArtistDetailPresenter: React.FC<Props> = ({ artistDetail, description, size }) => {
  return (
    <PageContainer>
      <CollapsingToolbar
        title={artistDetail.name}
        description={description}
        components={[<SectionTitle>Albums</SectionTitle>, <AlbumList scrollEnabled={false} />, <SectionTitle>Songs</SectionTitle>, <SongList scrollEnabled={false} />]}
        background={
          <View style={styles.container}>
            <ArtworkImage imageId={artistDetail.imageId} width={size} height={size} blurRadius={30} />
            <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size }]} />
            <View style={styles.artistImage}>
              <ArtworkImage imageId={artistDetail.imageId} width={size / 3} height={size / 3} borderRadius={size / 3 / 2} />
            </View>
          </View>
        }
      />
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

export default ArtistDetailPresenter;
