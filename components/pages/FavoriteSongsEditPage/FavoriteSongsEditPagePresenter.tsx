import React from 'react';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import SongEditList from '@/components/organisms/list/SongEditList';
import FavoriteSongsEditHeader from '@/components/molecules/header/FavoriteSongsEditHeader';

const FavoriteSongsEditPagePresenter = () => (
  <PageLayout>
    <FavoriteSongsEditHeader />
    <PageScrollableContent data={[<SongEditList />]} />
  </PageLayout>
);

export default FavoriteSongsEditPagePresenter;
