import React from 'react';
import SongsHeader from '@/components/molecules/header/SongsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { AllSongList, Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const SongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <SongsHeader />
    <PageScrollableContent data={[<AllSongList play={play} key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default SongsPagePresenter;
