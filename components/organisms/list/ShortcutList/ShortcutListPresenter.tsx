import { View, FlatList, StyleSheet } from 'react-native';
import ShortcutListItem from '@/components/molecules/listItem/ShortcutListItem';
import { ShortcutModel } from '@/model/ShortcutModel';

export type Props = {
  shortcuts: ShortcutModel[];
  itemWidth: number;
  imageWidth: number;
  gridCount: number;
};

const ShortcutListPresenter: React.FC<Props> = ({ shortcuts, itemWidth, imageWidth, gridCount }) => (
  <View style={styles.container}>
    <FlatList
      key={gridCount}
      data={shortcuts}
      renderItem={({ item }) => <ShortcutListItem itemWidth={itemWidth} imageWidth={imageWidth} {...item} />}
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

export default ShortcutListPresenter;
