import PageLayout from '@/components/molecules/PageLayout';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => (
  <PageLayout>
    <MainMenu />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
