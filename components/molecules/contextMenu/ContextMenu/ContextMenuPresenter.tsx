import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import ContextMenuPopup from '../ContextMenuPopup';

export type Props = {
  children: React.ReactNode;
  menu: React.ReactElement<typeof ContextMenuPopup>;
  show: boolean;
  onPress: () => void;
  close: () => void;
  open: () => void;
}

const ContextMenuPresenter: React.FC<Props> = ({ children, menu, show, onPress, close, open }) => (
  <TouchableWithoutFeedback onPress={close}>
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} onLongPress={open}>
        {children}
      </TouchableOpacity>
      {show ?? menu}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    overflow: 'visible',
  },
  menu: {

  }
});

export default ContextMenuPresenter;
