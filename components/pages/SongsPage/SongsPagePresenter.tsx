import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import SongList, { Props } from '@/components/organisms/SongList';
import { FlatList } from 'react-native';

const SongsPagePresenter: React.FC<Props> = ({ play }) => {
  return (
    <PageContainer>
      <FlatList data={[<EmptyHeader />, <SongList play={play} />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageContainer>
  );
};

export default SongsPagePresenter;
