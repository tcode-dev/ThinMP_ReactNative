import { Image } from 'react-native';
import { ImageProps } from './ArtworkImageContainer';

type Props = ImageProps &{
  data: string;
};

const ArtworkImagePresenter: React.FC<Props> = ({ data, width, height, borderRadius }) => {
  return (
    <Image source={{ uri: `data:image/png;base64,${data}` }} style={{ width, height, borderRadius }} />
  );
}

export default ArtworkImagePresenter;
