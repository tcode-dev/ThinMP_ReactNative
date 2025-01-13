import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';

type Props = {
  onPress: () => void;
};

const RepeatButtonPresenter: React.FC<Props> = ({ onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <MaterialCommunityIcons name="repeat" size={50} />
  </IconButton>
);

export default RepeatButtonPresenter;
