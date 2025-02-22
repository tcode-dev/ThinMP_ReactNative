import React from 'react';
import localize from '@/localize';
import SectionTitle from '@/components/atoms/title/SectionTitle';

const ShortcutTitleContainer = () => {
  const title = localize('shortcut');

  return <SectionTitle>{title}</SectionTitle>;
};

export default ShortcutTitleContainer;
