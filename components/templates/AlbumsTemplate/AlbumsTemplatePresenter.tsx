import PageContainer from '@/components/atoms/PageContainer';
import AlbumList from '@/components/organisms/AlbumList';

const AlbumsTemplatePresenter = () => {
  return (
    <PageContainer>
      <AlbumList scrollEnabled />
    </PageContainer>
  );
};

export default AlbumsTemplatePresenter;
