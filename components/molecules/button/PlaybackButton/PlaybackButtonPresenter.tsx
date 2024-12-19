import IconButton from '@/components/molecules/button/IconButton';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type Props = {
  name: 'play' | 'pause';
  buttonSize: number;
  iconSize: number;
  onPress: () => void;
};

const PlaybackButtonPresenter: React.FC<Props> = ({ name, buttonSize, iconSize, onPress }) => {
  return (
    <IconButton size={buttonSize} onPress={onPress}>
      <FontAwesome6 style={[{ width: iconSize, height: iconSize }]} name={name} size={iconSize} color="black" />
    </IconButton>
  );
};

export default PlaybackButtonPresenter;
