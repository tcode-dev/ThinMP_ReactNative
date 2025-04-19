import React from 'react';
import PlaylistsEditHeader from '@/components/molecules/header/PlaylistsEditHeader';
import PageLayout from '@/components/molecules/PageLayout';
import PageScrollableContent from '@/components/molecules/PageScrollableContent';
import PlaylistEditLList from '@/components/organisms/list/PlaylistEditLList';

const PlaylistsEditPagePresenter = () => (
  <PageLayout>
    <PlaylistsEditHeader />
    <PageScrollableContent data={[<PlaylistEditLList key={0} />]} />
  </PageLayout>
);

export default PlaylistsEditPagePresenter;
