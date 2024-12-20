import React from 'react';
import { FlatList } from 'react-native';
import { EmptyHeader } from '@/components/atoms/Header';
import PageLayout from '@/components/atoms/PageLayout';
import AlbumList from '@/components/organisms/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';


const AlbumsPagePresenter = () => {
  return (
    <PageLayout>
      <FlatList data={[<EmptyHeader />, <AlbumList />]} renderItem={({ item }) => <>{item}</>} />
      <MiniPlayer />
    </PageLayout>
  );
};

export default AlbumsPagePresenter;
