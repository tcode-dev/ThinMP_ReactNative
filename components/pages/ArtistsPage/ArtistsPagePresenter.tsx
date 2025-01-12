import { FlatList } from 'react-native';
import { EmptyHeader } from '@/components/molecules/listItem/EmptyHeaderListItem';
import PageLayout from '@/components/atoms/PageLayout';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader key={0} />, <ArtistList key={1} />]} renderItem={({ item }) => item} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default ArtistsPagePresenter;
