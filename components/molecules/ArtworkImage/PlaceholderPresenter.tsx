import { Image, ImageProps } from 'react-native';

const PlaceholderPresenter: React.FC<ImageProps> = (props) => {
  return <Image source={require('@/assets/images/song.png')} {...props} />;
};

export default PlaceholderPresenter;
