import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import IconButton from '@/components/molecules/button/IconButton';

export type Props = {
  name: 'play' | 'pause';
  buttonSize: number;
  iconSize: number;
  onPress: () => void;
};

const PlaybackButtonPresenter: React.FC<Props> = ({ name, buttonSize, iconSize, onPress }) => {
  return (
    <IconButton size={buttonSize} onPress={onPress}>
      <FontAwesome6 style={{ width: iconSize, height: iconSize }} name={name} size={iconSize} />
    </IconButton>
  );
};

export default PlaybackButtonPresenter;
