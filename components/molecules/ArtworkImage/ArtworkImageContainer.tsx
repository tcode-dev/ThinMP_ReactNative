
import { useEffect, useState } from 'react';
import ArtworkImagePresenter from './ArtworkImagePresenter';
import { SongsProps, getArtwork } from 'audio';

type Props = Pick<SongsProps, 'imageId'>;

const ArtworkImageContainer: React.FC<Props> = ({ imageId }) => {
  const [data, setData] = useState<string>();

  useEffect(() => {
    getArtwork(imageId).then((res) => {
      if (res) {
        setData(res);
      }
    });
  }, []);

  if (data === undefined) return null;

  return <ArtworkImagePresenter data={data} />;
}

export default ArtworkImageContainer;
