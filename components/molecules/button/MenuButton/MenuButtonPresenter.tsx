import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';
import ContextMenu from '../../contextMenu/ContextMenu';
import { FontAwesome6 } from '@expo/vector-icons';

export type Props = {
  color: string;
} & Pick<ContextMenuOpenProps, 'list'>;

const MenuButtonPresenter: React.FC<Props> = ({ color, list }) => {
  return (
    <ContextMenu list={list}>{open => (
      <TouchableOpacity onPress={open} >
        <View style={styles.container}>
          <FontAwesome6 name="ellipsis-vertical" size={20} style={styles.icon} color={color} />
        </View>
      </TouchableOpacity>
    )}
    </ContextMenu>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  icon: {
    textAlign: 'center',
  },
});

export default MenuButtonPresenter;
