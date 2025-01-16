import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import IconButton from '@/components/molecules/button/IconButton';

export type Props = {
  onPress: () => void;
};

const MenuButtonPresenter: React.FC<Props> = ({ onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <FontAwesome6 name="ellipsis-vertical" size={20} />
  </IconButton>
);

export default MenuButtonPresenter;
