import { EmptyHeader } from '@/components/atoms/Header';
import PageContainer from '@/components/atoms/PageContainer';
import { PrimaryText } from '@/components/atoms/Text';
import SongList, { Props } from '@/components/organisms/SongList';
import { FlatList } from 'react-native';

const PlayerPagePresenter: React.FC<Props> = ({ play }) => {
  return (
    <PageContainer>
      <PrimaryText> Playper page</PrimaryText>
    </PageContainer>
  );
};

export default PlayerPagePresenter;
