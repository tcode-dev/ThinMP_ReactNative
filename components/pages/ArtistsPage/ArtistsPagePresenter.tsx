import PageLayout from '@/components/molecules/PageLayout';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import ArtistsHeader from '@/components/molecules/header/ArtistsHeader';

const ArtistsPagePresenter = () => (
  <PageLayout>
    <ArtistsHeader />
    <PageScrollableContent data={[, <ArtistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default ArtistsPagePresenter;
