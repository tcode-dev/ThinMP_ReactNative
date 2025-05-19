import { FlatList } from 'react-native';
import ArtistListItem from '@/components/molecules/listItem/ArtistListItem';
import { ArtistModel } from '@/model/ArtistModel';

type Props = {
  artists: ArtistModel[];
  isUpdate?: boolean;
};

const ArtistListPresenter: React.FC<Props> = ({ artists, isUpdate }) => <FlatList data={artists} scrollEnabled={false} renderItem={({ item }) => <ArtistListItem {...item} isUpdate={isUpdate} />} />;

export default ArtistListPresenter;
