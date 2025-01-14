import { useState } from "react";
import ContextMenuPresenter, { Props } from "./ContextMenuPresenter";

const ContextMenuContainer: React.FC<Pick<Props, 'menu' | 'children'>> = ({menu, children}) => {
  const [state, setState] = useState<boolean>(false);
  const open = () => {
    console.log('open');
    setState(true);
  };
  const close = () => setState(false);

  return <ContextMenuPresenter menu={menu} show={state} open={open} close={close}>{children}</ContextMenuPresenter>;
};

export default ContextMenuContainer;
