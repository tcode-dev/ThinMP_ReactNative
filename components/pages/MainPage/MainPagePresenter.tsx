import PageLayout from '@/components/atoms/PageLayout';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainPagePresenter = () => {
  return (
    <PageLayout>
      <MainMenu />
      <MiniPlayer />
    </PageLayout>
  );
};

export default MainPagePresenter;
