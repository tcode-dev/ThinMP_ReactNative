import { EmptyHeader } from '@/components/atoms/Header';
import PageLayout from '@/components/atoms/PageLayout';
import ArtistList from '@/components/organisms/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import { FlatList } from 'react-native';

const ArtistsTemplatePresenter = () => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader />, <ArtistList />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default ArtistsTemplatePresenter;
