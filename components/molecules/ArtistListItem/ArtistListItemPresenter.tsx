import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ArtistProps } from 'audio';
import PlainListItem from '@/components/molecules/PlainListItem';

export type Props = ArtistProps & Pick<TouchableOpacityProps, 'onPress'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <PlainListItem>{name}</PlainListItem>
    </TouchableOpacity>
  );
};

export default ArtistListItemPresenter;
