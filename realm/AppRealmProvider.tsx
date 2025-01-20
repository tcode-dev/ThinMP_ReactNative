import { RealmProvider } from '@realm/react';
import React from 'react';
import { FavoriteSong } from './schema/FavoriteSong';

export type Props = {
  children: React.ReactNode;
}

const AppRealmProvider: React.FC<Props> = ({ children }) => (
  <RealmProvider schema={[FavoriteSong]} >
    {children}
  </RealmProvider>
);

export default AppRealmProvider;
