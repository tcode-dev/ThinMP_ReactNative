import React from 'react';
import FavoriteSongsHeader from '@/components/molecules/header/FavoriteSongsHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import { FavoriteSongList, Props } from '@/components/organisms/list/SongList';
import MiniPlayer from '@/components/organisms/MiniPlayer';

const FavoriteSongsPagePresenter: React.FC<Props> = ({ play }) => (
  <PageLayout>
    <FavoriteSongsHeader />
    <PageScrollableContent data={[<FavoriteSongList play={play} key={0} />]} />
    <MiniPlayer />
  </PageLayout>
);

export default FavoriteSongsPagePresenter;
