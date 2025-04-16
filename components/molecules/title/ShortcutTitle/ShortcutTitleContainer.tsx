import React from 'react';
import SectionTitle from '@/components/atoms/title/SectionTitle';
import localize from '@/localize';

const ShortcutTitleContainer = () => {
  const title = localize('shortcut');

  return <SectionTitle>{title}</SectionTitle>;
};

export default ShortcutTitleContainer;
