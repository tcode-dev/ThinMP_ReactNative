import React from 'react';
import SongsHeader from '@/components/molecules/header/SongsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongList, { Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const SongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <SongsHeader />
    <PageScrollableContent data={[<SongList play={play} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default SongsPagePresenter;
