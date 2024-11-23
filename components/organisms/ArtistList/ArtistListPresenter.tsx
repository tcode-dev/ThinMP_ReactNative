import { FlatList } from 'react-native';
import { ArtistProps } from 'audio';
import ArtistListItem from '@/components/molecules/ArtistListItem';

type Props = {
  artists: ArtistProps[];
};

const ArtistListPresenter: React.FC<Props> = ({ artists }) => {
  return <FlatList data={artists} scrollEnabled={false} renderItem={({ item }) => <ArtistListItem {...item} />} />;
};

export default ArtistListPresenter;
