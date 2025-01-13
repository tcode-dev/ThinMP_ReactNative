import { Image, ImageProps } from 'react-native';

const PlaceholderPresenter: React.FC<ImageProps> = (props) => <Image source={require('@/assets/images/song.png')} style={{ width: props.width, height: props.height }} {...props} />;

export default PlaceholderPresenter;
