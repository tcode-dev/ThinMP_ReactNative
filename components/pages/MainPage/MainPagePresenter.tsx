import PageLayout from '@/components/molecules/PageLayout';
import MainHeader from '@/components/organisms/main/MainHeader';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => (
  <PageLayout>
    <MainHeader />
    <MainMenu />
    <MiniPlayer />
  </PageLayout>
);

export default MainPagePresenter;
