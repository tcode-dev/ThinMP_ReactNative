import { TouchableOpacity } from 'react-native';
import PlainListItem from '../../listItem/PlainListItem';

export type Props = {
  label: React.ReactNode;
  onPress: () => void;
}

const ContextMenuItemPresenter: React.FC<Props> = ({ label, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <PlainListItem>{label}</PlainListItem>
  </TouchableOpacity>
);

export default ContextMenuItemPresenter;
