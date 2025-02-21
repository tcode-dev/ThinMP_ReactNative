import React from 'react';
import { FlatList } from 'react-native';
import EmptyHeader from '@/components/molecules/listItem/EmptyHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PlaylistList from '@/components/organisms/list/PlaylistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const PlaylistsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeader key={0} />, <PlaylistList key={1} />]} renderItem={({ item }) => <>{item}</>} />
    <MiniPlayer />
  </PageLayout>
);

export default PlaylistsPagePresenter;
