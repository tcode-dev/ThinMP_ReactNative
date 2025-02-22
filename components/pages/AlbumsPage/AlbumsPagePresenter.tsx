import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import AlbumList from '@/components/organisms/list/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';

const AlbumsPagePresenter = () => (
  <PageLayout>
    <PageScrollableContent data={[<AlbumList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default AlbumsPagePresenter;
