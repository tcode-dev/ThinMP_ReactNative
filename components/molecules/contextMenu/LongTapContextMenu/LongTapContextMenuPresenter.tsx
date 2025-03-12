import { TouchableOpacity } from 'react-native';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';
import ContextMenu from '@/components/molecules/contextMenu/ContextMenu';

export type LongTapContextMenuProps = {
  children: React.ReactNode;
  onPress: () => void;
} & Pick<ContextMenuOpenProps, 'list'>;

const LongTapContextMenu: React.FC<LongTapContextMenuProps> = ({ onPress, children, list }) => {
  return (
    <ContextMenu list={list}>
      {(open) => (
        <TouchableOpacity onPress={onPress} onLongPress={open}>
          {children}
        </TouchableOpacity>
      )}
    </ContextMenu>
  );
};

export default LongTapContextMenu;
