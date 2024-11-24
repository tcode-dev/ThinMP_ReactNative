import { FlatList, FlatListProps } from 'react-native';
import { SongProps } from 'audio';
import SongListItem, { Props as SongListItemProps} from '@/components/molecules/SongListItem';

export type Props = {
  songs: SongProps[];
  scrollEnabled?: FlatListProps<any>['scrollEnabled'];
} & Pick<SongListItemProps, 'play'>;

const SongListPresenter: React.FC<Props> = ({ songs, play, scrollEnabled = false }) => {
  return <FlatList data={songs} renderItem={({ item, index }) => <SongListItem index={index} play={play} {...item} />} scrollEnabled={scrollEnabled} />;
};

export default SongListPresenter;
