import { FlatList } from 'react-native';
import ArtistListItem from '@/components/molecules/listItem/ArtistListItem';
import { ArtistProps } from 'audio';

type Props = {
  artists: ArtistProps[];
};

const ArtistListPresenter: React.FC<Props> = ({ artists }) => <FlatList data={artists} scrollEnabled={false} renderItem={({ item }) => <ArtistListItem {...item} />} />;

export default ArtistListPresenter;
