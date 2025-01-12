import React from 'react';
import { FlatList } from 'react-native';
import { EmptyHeader } from '@/components/molecules/listItem/EmptyHeaderListItem';
import PageLayout from '@/components/atoms/PageLayout';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import SongList, { Props } from '@/components/organisms/list/SongList';

const SongsPagePresenter: React.FC<Props> = ({ play }) => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader key={0} />, <SongList play={play} key={1} />]} renderItem={({ item }) => item} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default SongsPagePresenter;
