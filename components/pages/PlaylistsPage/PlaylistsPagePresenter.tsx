import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import PlaylistList from '@/components/organisms/list/PlaylistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import PlaylistsHeader from '@/components/molecules/header/PlaylistsHeader';

const PlaylistsPagePresenter = () => (
  <PageLayout>
    <PlaylistsHeader />
    <PageScrollableContent data={[<PlaylistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default PlaylistsPagePresenter;
