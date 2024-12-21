import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const ShuffleButtonPresenter: React.FC<Props> = ({ onPress }) => {
  return (
    <IconButton size={50} onPress={onPress}>
      <MaterialCommunityIcons name="shuffle" size={50} color="black" />
    </IconButton>
  );
};

export default ShuffleButtonPresenter;
