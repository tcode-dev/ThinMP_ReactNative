import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import IconButton from '@/components/molecules/button/IconButton';

export type Props = {
  buttonSize: number;
  iconSize: number;
  onPress: () => void;
};

const NextButtonPresenter: React.FC<Props> = ({ buttonSize, iconSize, onPress }) => {
  return (
    <IconButton size={buttonSize} onPress={onPress}>
      <FontAwesome6 style={{ width: iconSize, height: iconSize }} name="forward-step" size={iconSize} />
    </IconButton>
  );
};

export default NextButtonPresenter;
