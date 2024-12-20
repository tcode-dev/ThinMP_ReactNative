import { FlatList } from 'react-native';
import { EmptyHeader } from '@/components/atoms/Header';
import PageLayout from '@/components/atoms/PageLayout';
import ArtistList from '@/components/organisms/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader />, <ArtistList />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default ArtistsPagePresenter;
