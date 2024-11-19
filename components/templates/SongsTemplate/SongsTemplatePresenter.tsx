import PageContainer from '@/components/atoms/PageContainer';
import SongList from '@/components/organisms/SongList';

const SongsTemplate = () => {
  return (
    <PageContainer>
      <SongList scrollEnabled />
    </PageContainer>
  );
};

export default SongsTemplate;
