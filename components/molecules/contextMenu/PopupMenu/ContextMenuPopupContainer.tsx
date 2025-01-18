

import ContextMenuPopupPresenter, { Props as ContextMenuPopupPresenterProps } from "./ContextMenuPopupPresenter";


export type Props = Pick<ContextMenuPopupPresenterProps, 'children' | 'y' | 'onPress'>;

const ContextMenuPopupContainer: React.FC<Props> = ({ children, y, onPress }) => {
  return <ContextMenuPopupPresenter y={y} onPress={onPress}>{children}</ContextMenuPopupPresenter>;
};

export default ContextMenuPopupContainer;
