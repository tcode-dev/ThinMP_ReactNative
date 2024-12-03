import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import ArtistList from '@/components/organisms/ArtistList';
import { FlatList } from 'react-native';

const ArtistsTemplatePresenter = () => {
  return (
    <PageContainer>
      <FlatList data={[<EmptyHeader />, <ArtistList />]} renderItem={({ item }) => <>{item}</>} />
    </PageContainer>
  );
};

export default ArtistsTemplatePresenter;
