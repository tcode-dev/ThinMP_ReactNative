import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';
import ContextMenu from '../../contextMenu/ContextMenu';
import { FontAwesome6 } from '@expo/vector-icons';

export type Props = {
  color: string;
  height: number;
  right: number;
} & Pick<ContextMenuOpenProps, 'list'>;

const MenuButtonPresenter: React.FC<Props> = ({ color, height, right, list }) => {
  return (
    <ContextMenu list={list}>{open => (
      <TouchableOpacity style={[styles.container, { height }]} onPress={open} >
        <View style={[styles.button, { right }]}>
          <FontAwesome6 name="ellipsis-vertical" size={25} color={color} style={styles.icon} />
        </View>
      </TouchableOpacity>
    )}
    </ContextMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default MenuButtonPresenter;
