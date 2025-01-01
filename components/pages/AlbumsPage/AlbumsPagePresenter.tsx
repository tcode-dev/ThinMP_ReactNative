import React from 'react';
import { FlatList } from 'react-native';

import { EmptyHeader } from '@/components/atoms/Header';
import PageLayout from '@/components/atoms/PageLayout';
import AlbumList from '@/components/organisms/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const AlbumsPagePresenter = () => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader key={0} />, <AlbumList key={1} />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default AlbumsPagePresenter;
