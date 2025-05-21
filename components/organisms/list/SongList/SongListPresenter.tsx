import { FlatList } from 'react-native';
import SongListItem from '@/components/molecules/listItem/SongListItem';
import { SongModel } from '@/model/SongModel';
import { Play } from '@/type/Audio';

type SongListPresenterProps = {
  songs: SongModel[];
  isUpdate?: boolean;
  play: Play;
};

const SongListPresenter: React.FC<SongListPresenterProps> = ({ songs, isUpdate, play }) => (
  <FlatList data={songs} renderItem={({ item, index }) => <SongListItem index={index} play={play} isUpdate={isUpdate} {...item} />} scrollEnabled={false} />
);

export default SongListPresenter;
