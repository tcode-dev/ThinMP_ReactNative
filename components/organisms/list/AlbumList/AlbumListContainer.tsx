import AlbumListPresenter, { Props } from './AlbumListPresenter';
import { useGridSize } from '@/hooks/useGridSize';

const AlbumListContainer: React.FC<Pick<Props, 'albums' | 'isUpdate'>> = ({ albums, isUpdate }) => {
  const { itemWidth, imageWidth, gridCount } = useGridSize();

  return <AlbumListPresenter albums={albums} itemWidth={itemWidth} isUpdate={isUpdate} imageWidth={imageWidth} gridCount={gridCount} />;
};

export default AlbumListContainer;
