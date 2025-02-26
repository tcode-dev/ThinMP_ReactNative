import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import SongList, { Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import FavoriteSongsHeader from '@/components/molecules/header/FavoriteSongsHeader';

const FavoriteSongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <FavoriteSongsHeader />
    <PageScrollableContent data={[<SongList play={play} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteSongsPagePresenter;
