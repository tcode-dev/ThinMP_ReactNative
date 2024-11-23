import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import SongList from '@/components/organisms/SongList';
import { FlatList } from 'react-native';

const SongsTemplate = () => {
  return (
    <PageContainer>
      <FlatList
        data={[<EmptyHeader />, <SongList />]}
        renderItem={({ item }) => <>{item}</>}
      />
    </PageContainer>
  );
};

export default SongsTemplate;
