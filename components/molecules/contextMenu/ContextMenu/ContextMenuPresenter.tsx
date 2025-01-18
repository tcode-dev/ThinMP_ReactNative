import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import ContextMenuPopup from '../PopupMenu';

export type Props = {
  children: React.ReactNode;
  menu: React.ReactNode;
  show: boolean;
  y: number;
  onPress: () => void;
  close: () => void;
  open: (event: GestureResponderEvent) => void;
}

const ContextMenuPresenter: React.FC<Props> = ({ children, menu, show, y, onPress, close, open }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} onLongPress={open}>
      {children}
    </TouchableOpacity>
    {show && <ContextMenuPopup y={y} onPress={close}>{menu}</ContextMenuPopup>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    // overflow: 'visible',
  },
});

export default ContextMenuPresenter;
