import React from 'react';
import PlaylistsHeader from '@/components/molecules/header/PlaylistsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import PlaylistList from '@/components/organisms/list/PlaylistList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const PlaylistsPagePresenter = () => (
  <PageLayout>
    <PlaylistsHeader />
    <PageScrollableContent data={[<PlaylistList />]} />
    <MiniPlayer />
  </PageLayout>
);

export default PlaylistsPagePresenter;
