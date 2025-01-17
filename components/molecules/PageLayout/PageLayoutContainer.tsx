import React from 'react';
import PageLayoutPresenter, { Props } from './PageLayoutPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';

const PageLayoutContainer: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  const color = useThemeColor();

  return <PageLayoutPresenter backgroundColor={color.background}>{children}</PageLayoutPresenter>;
};

export default PageLayoutContainer;
