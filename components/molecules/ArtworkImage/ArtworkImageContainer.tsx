import { useEffect, useState } from 'react';
import { ImageProps, View } from 'react-native';
import { Result, toLoading, toSuccess, toFailure } from '@/type/Result';
import { SongProps } from 'audio';
import { taskQueue } from '@/utils/queue';
import useArtworkStore from '@/store/artworkStore';
import ArtworkImagePresenter from './ArtworkImagePresenter';
import PlaceholderPresenter from './PlaceholderPresenter';

type Props = ImageProps & Pick<SongProps, 'imageId'>;

const ArtworkImageContainer: React.FC<Props> = ({ imageId, ...props }) => {
  const { getArtwork } = useArtworkStore();
  const [state, setState] = useState<Result<string>>(toLoading());

  useEffect(() => {
    const load = async () => {
      try {
        const artwork = await getArtwork(imageId);

        if (artwork) {
          setState(toSuccess(artwork));
        } else {
          setState(toFailure());
        }
      } catch (error) {
        setState(toFailure());
      }
    };

    taskQueue.add(load);
  }, [imageId]);

  if (state.isLoading) return <View style={{ width: props.width, height: props.height }} />;

  if (state.isSuccess) return <ArtworkImagePresenter data={state.value} {...props} />;

  return <PlaceholderPresenter {...props} />;
};

export default ArtworkImageContainer;
