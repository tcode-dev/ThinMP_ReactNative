import useSongsStore from '@/store/songsStore';
import SongListPresenter from './SongListPresenter';
import { FlatListProps } from 'react-native';

type Props = {
  scrollEnabled?: FlatListProps<any>['scrollEnabled'];
}

const SongListContainer = ({ scrollEnabled = true }: Props) => {
  const { state } = useSongsStore();

  if (state.isLoading) return null;

  if (state.isSuccess) return <SongListPresenter songs={state.value} scrollEnabled={scrollEnabled} />;

  return null;
};

export default SongListContainer;
