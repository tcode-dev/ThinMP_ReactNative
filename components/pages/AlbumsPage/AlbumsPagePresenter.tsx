import React from 'react';
import { FlatList } from 'react-native';
import EmptyHeader from '@/components/molecules/listItem/EmptyHeader';
import PageLayout from '@/components/molecules/PageLayout';
import AlbumList from '@/components/organisms/list/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import EmptyFooter from '@/components/molecules/listItem/EmptyFooter';

const AlbumsPagePresenter = () => (
  <PageLayout>
    <FlatList data={[<EmptyHeader key={0} />, <AlbumList key={1} />, <EmptyFooter key={2} />]} renderItem={({ item }) => <>{item}</>} />
    <MiniPlayer />
  </PageLayout>
);

export default AlbumsPagePresenter;
