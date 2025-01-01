import { FlatList } from 'react-native';

import ArtistListItem from '@/components/molecules/ArtistListItem';
import { ArtistProps } from 'audio';

type Props = {
  artists: ArtistProps[];
};

const ArtistListPresenter: React.FC<Props> = ({ artists }) => {
  return <FlatList data={artists} scrollEnabled={false} renderItem={({ item }) => <ArtistListItem {...item} />} />;
};

export default ArtistListPresenter;
