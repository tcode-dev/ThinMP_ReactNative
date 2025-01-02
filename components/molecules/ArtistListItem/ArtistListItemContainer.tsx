import ArtistListItemPresenter from './ArtistListItemPresenter';
import { ArtistProps } from 'audio';

const ArtistListItemContainer: React.FC<ArtistProps> = (props) => {
  const href = `/artists/${props.id}`;

  return <ArtistListItemPresenter {...props} href={href} />;
};

export default ArtistListItemContainer;
