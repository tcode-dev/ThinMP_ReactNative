import { FlatList } from 'react-native';
import ArtistListItem from '@/components/molecules/listItem/ArtistListItem';
import { ArtistModel } from '@/model/ArtistModel';

type Props = {
  artists: ArtistModel[];
};

const ArtistListPresenter: React.FC<Props> = ({ artists }) => <FlatList data={artists} scrollEnabled={false} renderItem={({ item }) => <ArtistListItem {...item} />} />;

export default ArtistListPresenter;
