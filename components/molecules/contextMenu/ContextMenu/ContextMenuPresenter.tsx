import { GestureResponderEvent, TouchableOpacity } from 'react-native';

export type Props = {
  children: React.ReactNode;
  onPress: () => void;
  open: (event: GestureResponderEvent) => void;
}

const ContextMenuPresenter: React.FC<Props> = ({ children, onPress, open }) => (
  <TouchableOpacity onPress={onPress} onLongPress={open}>
    {children}
  </TouchableOpacity>
);

export default ContextMenuPresenter;
