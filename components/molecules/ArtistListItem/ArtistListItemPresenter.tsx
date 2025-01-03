import CustomLink, { Props as CustomLinkProps } from '@/components/molecules/CustomLink';
import PlainListItem from '@/components/molecules/PlainListItem';
import { ArtistProps } from 'audio';

export type Props = ArtistProps & Pick<CustomLinkProps, 'href'>;

const ArtistListItemPresenter: React.FC<Props> = ({ name, href }) => {
  return (
    <CustomLink href={href}>
      <PlainListItem>{name}</PlainListItem>
    </CustomLink>
  );
};

export default ArtistListItemPresenter;
