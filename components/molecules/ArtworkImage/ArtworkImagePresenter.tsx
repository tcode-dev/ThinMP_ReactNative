import { Image } from 'react-native';

type Props = {
  data: string;
  width?: number;
  height?: number;
};

const ArtworkImagePresenter: React.FC<Props> = ({ data, width = 44, height = 44 }) => {
  return (
    <Image source={{ uri: `data:image/png;base64,${data}` }} style={{ width, height }} />
  );
}

export default ArtworkImagePresenter;
