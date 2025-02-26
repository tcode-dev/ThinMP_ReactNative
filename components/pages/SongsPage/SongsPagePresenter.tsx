import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import SongList, { Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongsHeader from '@/components/molecules/header/SongsHeader';

const SongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <SongsHeader />
    <PageScrollableContent data={[<SongList play={play} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default SongsPagePresenter;
