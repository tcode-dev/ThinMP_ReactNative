import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import EmptyHeader from '@/components/molecules/listItem/EmptyHeader';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeader key={0} />, <ArtistList key={1} />]} renderItem={({ item }) => item} />
    <MiniPlayer />
  </PageLayout>
);

export default ArtistsPagePresenter;
