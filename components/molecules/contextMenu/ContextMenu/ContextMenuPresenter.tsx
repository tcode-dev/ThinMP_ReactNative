import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import ContextMenuPopup from '../ContextMenuPopup';

export type Props = {
  children: React.ReactNode;
  menu: React.ReactElement<typeof ContextMenuPopup>;
  show: boolean;
  close: () => void;
  open: () => void;
}

const ContextMenuPresenter: React.FC<Props> = ({ children, menu, show, close, open }) => (
  <TouchableWithoutFeedback onPress={close}>
    <View style={styles.container}>
      <TouchableOpacity onLongPress={open}>
        {children}
      </TouchableOpacity>
      {show ?? menu}
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  menu: {

  }
});

export default ContextMenuPresenter;
