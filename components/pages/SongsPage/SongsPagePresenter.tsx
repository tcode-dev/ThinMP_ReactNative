import React from 'react';
import { FlatList } from 'react-native';
import { EmptyHeader } from '@/components/atoms/Header';
import PageLayout from '@/components/atoms/PageLayout';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import SongList, { Props } from '@/components/organisms/SongList';

const SongsPagePresenter: React.FC<Props> = ({ play }) => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader />, <SongList play={play} />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default SongsPagePresenter;
