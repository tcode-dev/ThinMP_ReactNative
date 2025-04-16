import ArtistsHeader from '@/components/molecules/header/ArtistsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import ArtistList from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => (
  <PageLayout>
    <ArtistsHeader />
    <PageScrollableContent data={[<ArtistList key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default ArtistsPagePresenter;
