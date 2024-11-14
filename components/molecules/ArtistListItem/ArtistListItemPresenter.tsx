import { ArtistProps } from 'audio';
import PlainListItem from '@/components/molecules/PlainListItem';
import CustomLink, { Props as CustomLinkProps } from '@/components/molecules/CustomLink';

export type Props = ArtistProps & Pick<CustomLinkProps, 'href'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, href }) => {
  return (
    <CustomLink href={href}>
      <PlainListItem>{name}</PlainListItem>
    </CustomLink>
  );
};

export default ArtistListItemPresenter;
