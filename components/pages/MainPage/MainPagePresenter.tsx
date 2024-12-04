import PageContainer from '@/components/atoms/PageContainer';
import MainMenu from '@/components/organisms/MainMenu';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const MainTemplate = () => {
  return (
    <PageContainer>
      <MainMenu />
      <MiniPlayer />
    </PageContainer>
  );
};

export default MainTemplate;
