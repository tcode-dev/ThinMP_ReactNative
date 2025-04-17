import { TouchableOpacity } from 'react-native';
import ContextMenu from '@/components/molecules/contextMenu/ContextMenu';
import { ContextMenuOpenProps } from '@/store/contextMenuStore';

export type LongTapContextMenuProps = {
  children: React.ReactNode;
  onPress: () => void;
} & Pick<ContextMenuOpenProps, 'list'>;

const LongTapContextMenu: React.FC<LongTapContextMenuProps> = ({ onPress, children, list }) => (
  <ContextMenu list={list}>
    {(open) => (
      <TouchableOpacity onPress={onPress} onLongPress={open}>
        {children}
      </TouchableOpacity>
    )}
  </ContextMenu>
);

export default LongTapContextMenu;
