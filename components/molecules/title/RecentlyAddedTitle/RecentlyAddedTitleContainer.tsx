import React from 'react';
import localize from '@/localize';
import SectionTitle from '@/components/atoms/title/SectionTitle';

const RecentlyAddedTitleContainer = () => {
  const title = localize('recentlyAdded');

  return <SectionTitle>{title}</SectionTitle>;
};

export default RecentlyAddedTitleContainer;
