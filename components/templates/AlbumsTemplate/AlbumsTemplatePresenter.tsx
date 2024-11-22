import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import AlbumList from '@/components/organisms/AlbumList';
import { FlatList } from 'react-native';

const AlbumsTemplatePresenter = () => {
  return (
    <PageContainer>
      <FlatList
        data={[<EmptyHeader />, <AlbumList scrollEnabled />]}
        renderItem={({ item }) => <>{item}</>}
      />
    </PageContainer>
  );
};

export default AlbumsTemplatePresenter;
