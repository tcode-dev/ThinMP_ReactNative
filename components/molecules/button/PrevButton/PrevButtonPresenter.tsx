import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const PrevButtonPresenter: React.FC<Props> = ({ onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <FontAwesome6 name="backward-step" size={50} />
  </IconButton>
);

export default PrevButtonPresenter;
