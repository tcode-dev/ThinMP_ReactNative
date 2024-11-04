import { Text, View } from 'react-native';
import { SongsProps } from 'audio';
import ArtworkImage from '@/components/molecules/ArtworkImage';

const SongListItemPresenter: React.FC<SongsProps> = ({name, imageId}) => {
  return (
    <View>
      <ArtworkImage imageId={imageId} />
      <Text>{name}</Text>
    </View>
  );
}

export default SongListItemPresenter;
