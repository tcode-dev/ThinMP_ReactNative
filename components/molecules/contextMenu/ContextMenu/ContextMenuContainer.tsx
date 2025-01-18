import { useState } from "react";
import { GestureResponderEvent } from "react-native";
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from "./ContextMenuPresenter";

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'menu' | 'children'>;

const ContextMenuContainer: React.FC<Pick<Props, 'onPress' | 'menu' | 'children'>> = ({ onPress, menu, children }) => {
  const [state, setState] = useState<boolean>(false);
  const [y, setY] = useState(0);

  const open = (event: GestureResponderEvent) => {
    console.log('open');
    const { locationY } = event.nativeEvent;
    setY(locationY);
    setState(true);
  };

  const close = () => {
    console.log('close');
    setState(false);
  };

  return <ContextMenuPresenter menu={menu} show={state} y={y} onPress={onPress} open={open} close={close}>{children}</ContextMenuPresenter>;
};

export default ContextMenuContainer;
