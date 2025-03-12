import { View, FlatList, StyleSheet } from 'react-native';
import AlbumListItem from '@/components/molecules/listItem/AlbumListItem';
import { AlbumModel } from '@/model/AlbumModel';

export type Props = {
  albums: AlbumModel[];
  itemWidth: number;
  imageWidth: number;
  gridCount: number;
};

const AlbumListPresenter: React.FC<Props> = ({ albums, itemWidth, imageWidth, gridCount }) => (
  <View style={styles.container}>
    <FlatList
      data={albums}
      renderItem={({ item }) => <AlbumListItem itemWidth={itemWidth} imageWidth={imageWidth} {...item} />}
      numColumns={gridCount}
      columnWrapperStyle={styles.row}
      scrollEnabled={false}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default AlbumListPresenter;
