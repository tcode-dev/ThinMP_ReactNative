import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import SongList, { Props } from '@/components/organisms/SongList';
import { FlatList } from 'react-native';

const SongsPagePresenter: React.FC<Props> = ({ play }) => {
  return (
    <PageContainer>
      <FlatList
        data={[<EmptyHeader />, <SongList play={play} />]}
        renderItem={({ item }) => <>{item}</>}
      />
    </PageContainer>
  );
};

export default SongsPagePresenter;
