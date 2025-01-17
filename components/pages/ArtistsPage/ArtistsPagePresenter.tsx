import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import EmptyHeaderListItem from '@/components/molecules/listItem/EmptyHeaderListItem';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeaderListItem key={0} />, <ArtistList key={1} />]} renderItem={({ item }) => item} />
    <MiniPlayer />
  </PageLayout>
);

export default ArtistsPagePresenter;
