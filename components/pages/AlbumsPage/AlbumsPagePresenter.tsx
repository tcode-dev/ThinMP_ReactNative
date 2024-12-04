import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import AlbumList from '@/components/organisms/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import { FlatList } from 'react-native';

const AlbumsPagePresenter = () => {
  return (
    <PageContainer>
      <FlatList data={[<EmptyHeader />, <AlbumList />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageContainer>
  );
};

export default AlbumsPagePresenter;
