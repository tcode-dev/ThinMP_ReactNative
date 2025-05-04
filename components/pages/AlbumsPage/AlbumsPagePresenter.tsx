import React from 'react';
import AlbumsHeader from '@/components/molecules/header/AlbumsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { AllAlbumList } from '@/components/organisms/list/AlbumList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const AlbumsPagePresenter = () => (
  <PageLayout>
    <AlbumsHeader />
    <PageScrollableContent data={[<AllAlbumList key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default AlbumsPagePresenter;
