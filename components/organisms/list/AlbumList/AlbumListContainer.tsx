import AlbumListPresenter, { Props } from './AlbumListPresenter';
import { useGridSize } from '@/hooks/useGridSize';

const AlbumListContainer: React.FC<Pick<Props, 'albums'>> = ({albums}) => {
  const { itemWidth, imageWidth, gridCount } = useGridSize();

  return <AlbumListPresenter albums={albums} itemWidth={itemWidth} imageWidth={imageWidth} gridCount={gridCount} />;
};

export default AlbumListContainer;
