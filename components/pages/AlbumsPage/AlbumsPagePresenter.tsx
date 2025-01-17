import React from 'react';
import { FlatList } from 'react-native';
import PageLayout from '@/components/molecules/PageLayout';
import EmptyHeaderListItem from '@/components/molecules/listItem/EmptyHeaderListItem';
import AlbumList from '@/components/organisms/list/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const AlbumsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeaderListItem key={0} />, <AlbumList key={1} />]} renderItem={({ item }) => <>{item}</>} />
    <MiniPlayer />
  </PageLayout>
);

export default AlbumsPagePresenter;
