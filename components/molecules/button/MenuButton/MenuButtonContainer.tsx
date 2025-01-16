import MenuButtonPresenter, { Props } from './MenuButtonPresenter';

const MenuButtonContainer: React.FC<Pick<Props, 'onPress'>> = ({ onPress }) => <MenuButtonPresenter onPress={onPress} />;

export default MenuButtonContainer;
