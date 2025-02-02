import { FlatList } from 'react-native';
import SongListItem from '@/components/molecules/listItem/SongListItem';
import { Play } from '@/type/Audio';
import { SongProps } from 'audio';

export type Props = {
  songs: SongProps[];
  play: Play;
};

const SongListPresenter: React.FC<Props> = ({ songs, play }) => <FlatList data={songs} renderItem={({ item, index }) => <SongListItem index={index} play={play} {...item} />} scrollEnabled={false} />;

export default SongListPresenter;
