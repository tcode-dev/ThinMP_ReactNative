import { Image } from 'react-native';
import { ImageProps } from './ArtworkImageContainer';

const PlaceholderPresenter: React.FC<ImageProps> = ({ width, height }) => {
  return (
    <Image source={require('@/assets/images/song.png')} style={{ width, height }} />
  );
}

export default PlaceholderPresenter;
