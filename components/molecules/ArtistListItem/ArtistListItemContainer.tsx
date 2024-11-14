import { ArtistProps } from 'audio';
import ArtistListItemPresenter from './ArtistListItemPresenter';

const ArtistListItemContainer: React.FC<ArtistProps> = (props) => {
  const href = `/artists/${props.id}`;

  return <ArtistListItemPresenter {...props} href={href} />;
};

export default ArtistListItemContainer;
