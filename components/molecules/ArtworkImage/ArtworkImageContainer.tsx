import { useEffect, useState } from 'react';
import { ImageProps, View } from 'react-native';
import ArtworkImagePresenter from './ArtworkImagePresenter';
import PlaceholderPresenter from './PlaceholderPresenter';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import Audio, { SongProps } from 'audio';

type Props = ImageProps & Pick<SongProps, 'imageId'>;

const ArtworkImageContainer: React.FC<Props> = ({ imageId, ...props }) => {
  const [state, setState] = useState<Result<string>>(toLoading());

  useEffect(() => {
    const load = async () => {
      try {
        const artwork = await Audio.getArtwork(imageId);

        if (artwork) {
          setState(toSuccess(artwork));
        } else {
          setState(toFailure());
        }
      } catch (_error) {
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
