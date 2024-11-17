import { Image, ImageProps } from 'react-native';

type Props = ImageProps & {
  data: string;
};

const ArtworkImagePresenter: React.FC<Props> = ({ data, ...props }) => {
  return <Image source={{ uri: `data:image/png;base64,${data}` }} style={{ width: props.width, height: props.height }} {...props} />;
};

export default ArtworkImagePresenter;
