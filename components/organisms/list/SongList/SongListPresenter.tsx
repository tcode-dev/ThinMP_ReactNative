import { FlatList } from 'react-native';
import SongListItem from '@/components/molecules/listItem/SongListItem';
import { SongModel } from '@/model/SongModel';
import { Play } from '@/type/Audio';

export type Props = {
  songs: SongModel[];
  play: Play;
};

const SongListPresenter: React.FC<Props> = ({ songs, play }) => <FlatList data={songs} renderItem={({ item, index }) => <SongListItem index={index} play={play} {...item} />} scrollEnabled={false} />;

export default SongListPresenter;
