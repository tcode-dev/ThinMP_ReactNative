import { Href, useRouter } from 'expo-router';
import { ArtistProps } from 'audio';
import ArtistListItemPresenter from './ArtistListItemPresenter';

const ArtistListItemContainer: React.FC<ArtistProps> = (props) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/artists/${props.id}` as Href);
  };

  return <ArtistListItemPresenter {...props} onPress={onPress} />;
};

export default ArtistListItemContainer;
