import { View, FlatList, StyleSheet } from 'react-native';
import AlbumListItem from '@/components/molecules/listItem/AlbumListItem';
import { AlbumModel } from '@/model/AlbumModel';

export type Props = {
  albums: AlbumModel[];
  gridCount: number;
  imageWidth: number;
  isUpdate?: boolean;
  itemWidth: number;
};

const AlbumListPresenter: React.FC<Props> = ({ albums, gridCount, imageWidth, isUpdate, itemWidth }) => (
  <View style={styles.container}>
    <FlatList
      key={gridCount}
      data={albums}
      renderItem={({ item }) => <AlbumListItem itemWidth={itemWidth} imageWidth={imageWidth} isUpdate={isUpdate} {...item} />}
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
    justifyContent: 'flex-start',
  },
});

export default AlbumListPresenter;
