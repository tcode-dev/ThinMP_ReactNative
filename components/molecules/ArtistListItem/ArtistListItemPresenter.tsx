import { Href, Link } from 'expo-router';
import { ArtistProps } from 'audio';
import PlainListItem from '@/components/molecules/PlainListItem';

export type Props = ArtistProps & {
  href: Href;
};

const ArtistListItemPresenter: React.FC<Props> = ({ name, href }) => {
  return (
    <Link href={href}>
      <PlainListItem>{name}</PlainListItem>
    </Link>
  );
};

export default ArtistListItemPresenter;
