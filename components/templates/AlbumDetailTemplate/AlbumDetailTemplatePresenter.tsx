import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AlbumProps } from 'audio';
import PageContainer from '@/components/atoms/PageContainer';
import CollapsingToolbar from '@/components/molecules/CollapsingToolbar';
import SongList from '@/components/organisms/SongList';
import ArtworkImage from '@/components/molecules/ArtworkImage';

type Props = {
  albumDetail: AlbumProps;
  size: number;
};

const AlbumDetailPresenter: React.FC<Props> = ({ albumDetail, size }) => {
  return (
    <PageContainer>
      <CollapsingToolbar
        title={albumDetail.name}
        description={albumDetail.artistName}
        components={[<SongList scrollEnabled={false} />]}
        background={
          <View style={styles.container}>
            <ArtworkImage imageId={albumDetail.imageId} width={size} height={size} />
            <LinearGradient colors={['transparent', '#ffffff']} style={[styles.linearGradient, { height: size * 0.5 }]} />
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
});

export default AlbumDetailPresenter;
