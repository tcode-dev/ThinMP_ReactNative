import React from 'react';
import { FlatList } from 'react-native';
import EmptyHeader from '@/components/molecules/listItem/EmptyHeader';
import PageLayout from '@/components/molecules/PageLayout';
import SongList, { Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const SongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <FlatList data={[<EmptyHeader key={0} />, <SongList play={play} key={1} />]} renderItem={({ item }) => item} />
    <MiniPlayer />
  </PageLayout>
);

export default SongsPagePresenter;
