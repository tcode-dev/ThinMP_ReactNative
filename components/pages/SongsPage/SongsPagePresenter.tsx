import React from 'react';
import SongsHeader from '@/components/molecules/header/SongsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { AllSongList } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const SongsPagePresenter = () => (
  <PageLayout>
    <SongsHeader />
    <PageScrollableContent data={[<AllSongList key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default SongsPagePresenter;
