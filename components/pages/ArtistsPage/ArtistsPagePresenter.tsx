import ArtistsHeader from '@/components/molecules/header/ArtistsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { AllArtistList } from '@/components/organisms/list/ArtistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const ArtistsPagePresenter = () => (
  <PageLayout>
    <ArtistsHeader />
    <PageScrollableContent data={[<AllArtistList key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default ArtistsPagePresenter;
