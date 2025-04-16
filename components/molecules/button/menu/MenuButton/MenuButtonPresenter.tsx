import { FontAwesome6 } from '@expo/vector-icons';
import { StyleSheet , TouchableOpacity } from 'react-native';
import ContextMenu from '@/components/molecules/contextMenu/ContextMenu';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';

export type Props = {
  color: string;
} & Pick<ContextMenuOpenProps, 'list'>;

const MenuButtonPresenter: React.FC<Props> = ({ color, list }) => (
    <ContextMenu list={list}>
      {(open) => (
        <TouchableOpacity style={styles.container} onPress={open}>
          <FontAwesome6 name="ellipsis-vertical" size={25} color={color} style={styles.icon} />
        </TouchableOpacity>
      )}
    </ContextMenu>
  );

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
});

export default MenuButtonPresenter;
