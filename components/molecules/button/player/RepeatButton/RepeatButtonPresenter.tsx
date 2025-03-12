import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import IconButton from '@/components/molecules/button/IconButton';
import { RepeatMode } from 'audio';

export const RepeatIcon = {
  [RepeatMode.Off]: 'repeat-off',
  [RepeatMode.One]: 'repeat-once',
  [RepeatMode.All]: 'repeat',
} as const;

type RepeatIconProps = (typeof RepeatIcon)[keyof typeof RepeatIcon];

type Props = {
  icon: RepeatIconProps;
  onPress: () => void;
};

const RepeatButtonPresenter: React.FC<Props> = ({ icon, onPress }) => (
  <IconButton size={50} onPress={onPress}>
    <MaterialCommunityIcons name={icon} size={50} />
  </IconButton>
);

export default RepeatButtonPresenter;
