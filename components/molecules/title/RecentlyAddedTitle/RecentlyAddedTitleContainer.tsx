import React from 'react';
import RecentlyAddedTitlePresenter from './RecentlyAddedTitlePresenter';
import localize from '@/localize';

const RecentlyAddedTitleContainer = () => {
  const title = localize('recentlyAdded');

  return <RecentlyAddedTitlePresenter>{title}</RecentlyAddedTitlePresenter>;
};

export default RecentlyAddedTitleContainer;
