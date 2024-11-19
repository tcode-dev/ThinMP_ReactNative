import { View, FlatList, StyleSheet, FlatListProps } from 'react-native';
import { AlbumProps } from 'audio';
import AlbumListItem from '@/components/molecules/AlbumListItem';

type Props = {
  albums: AlbumProps[];
  itemWidth: number;
  imageWidth: number;
  scrollEnabled?: FlatListProps<any>['scrollEnabled'];
};

const AlbumListPresenter: React.FC<Props> = ({ albums, itemWidth, imageWidth, scrollEnabled = false }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        renderItem={({ item }) => <AlbumListItem itemWidth={itemWidth} imageWidth={imageWidth} {...item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={scrollEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default AlbumListPresenter;
