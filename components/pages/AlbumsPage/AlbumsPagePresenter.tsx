import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import AlbumList from '@/components/organisms/list/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import AlbumsHeader from '@/components/molecules/header/AlbumsHeader';

const AlbumsPagePresenter = () => (
  <PageLayout>
    <AlbumsHeader />
    <PageScrollableContent data={[<AlbumList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default AlbumsPagePresenter;
