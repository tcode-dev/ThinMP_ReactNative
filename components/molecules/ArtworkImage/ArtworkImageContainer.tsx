
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SongProps, getArtwork } from 'audio';
import { Result } from '@/type/Result';
import ArtworkImagePresenter from './ArtworkImagePresenter';
import PlaceholderPresenter from './PlaceholderPresenter';

export type ImageProps = {
  size: number;
  borderRadius: number;
};

type Props = ImageProps & Pick<SongProps, 'imageId'>;

const ArtworkImageContainer: React.FC<Props> = ({ imageId, ...props }) => {
  const [state, setState] = useState<Result<string>>({ isLoading: true });

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getArtwork(imageId);
        if (result) {
          setState({ isLoading: false, isSuccess: true, value: result });
        } else {
          setState({ isLoading: false, isSuccess: false });
        }
      } catch (error) {
        setState({ isLoading: false, isSuccess: false });
      }
    };

    load();
  }, []);

  if (state.isLoading) return <View style={{ width: props.size, height: props.size }} />;

  if (state.isSuccess) return <ArtworkImagePresenter data={state.value} {...props} />;

  return <PlaceholderPresenter {...props} />;
}

export default ArtworkImageContainer;
