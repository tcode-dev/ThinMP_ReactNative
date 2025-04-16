import React from 'react';
import SectionTitle from '@/components/atoms/title/SectionTitle';
import localize from '@/localize';

const RecentlyAddedTitleContainer = () => {
  const title = localize('recentlyAdded');

  return <SectionTitle>{title}</SectionTitle>;
};

export default RecentlyAddedTitleContainer;
