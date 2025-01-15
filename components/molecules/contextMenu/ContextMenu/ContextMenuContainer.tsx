import { useState } from "react";
import ContextMenuPresenter, { Props as ContextMenuPresenterProps } from "./ContextMenuPresenter";

export type Props = Pick<ContextMenuPresenterProps, 'onPress' | 'menu' | 'children'>;

const ContextMenuContainer: React.FC<Pick<Props, 'onPress' | 'menu' | 'children'>> = ({ onPress, menu, children }) => {
  const [state, setState] = useState<boolean>(false);
  const open = () => {
    setState(true);
  };
  const close = () => setState(false);

  return <ContextMenuPresenter menu={menu} show={state} onPress={onPress} open={open} close={close}>{children}</ContextMenuPresenter>;
};

export default ContextMenuContainer;
