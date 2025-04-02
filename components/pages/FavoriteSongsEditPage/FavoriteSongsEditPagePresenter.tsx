import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import FavoriteSongsHeader from '@/components/molecules/header/FavoriteSongsHeader';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongEditList from '@/components/organisms/list/SongEditList';

const FavoriteSongsEditPagePresenter = () => (
  <PageLayout>
    <FavoriteSongsHeader />
    <PageScrollableContent data={[<SongEditList />]} />
  </PageLayout>
);

export default FavoriteSongsEditPagePresenter;
