import { FlatList } from 'react-native';
import { AlbumProps } from 'audio';
import AlbumListItem from '@/components/molecules/AlbumListItem';

type Props = {
  albums: AlbumProps[];
};

const AlbumListPresenter: React.FC<Props> = ({ albums }) => {
  return (
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumListItem {...item} />}
    />
  );
}

export default AlbumListPresenter;
