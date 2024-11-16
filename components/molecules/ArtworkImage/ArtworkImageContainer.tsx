import { useEffect, useState } from 'react';
import { ImageProps, View } from 'react-native';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { SongProps, getArtwork } from 'audio';
import ArtworkImagePresenter from './ArtworkImagePresenter';
import PlaceholderPresenter from './PlaceholderPresenter';

type Props = ImageProps & Pick<SongProps, 'imageId'>;

const ArtworkImageContainer: React.FC<Props> = ({ imageId, ...props }) => {
  const [state, setState] = useState<Result<string>>(toLoading());

  useEffect(() => {
    const load = async () => {
      try {
        const result = await getArtwork(imageId);
        if (result) {
          setState(toSuccess(result));
        } else {
          setState(toFailure());
        }
      } catch (error) {
        setState(toFailure());
      }
    };

    load();
  }, [imageId]);

  if (state.isLoading) return <View style={{ width: props.width, height: props.height }} />;

  if (state.isSuccess) return <ArtworkImagePresenter data={state.value} {...props} />;

  return <PlaceholderPresenter {...props} />;
};

export default ArtworkImageContainer;
