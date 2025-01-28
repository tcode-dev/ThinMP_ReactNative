import initializeFavoriteArtistsTable from './initializeFavoriteArtistsTable';
import initializeFavoriteSongsTable from './initializeFavoriteSongsTable';
import initializeSetting from './initializeSetting';

const initializeDatabase = () => {
  initializeSetting();
  initializeFavoriteArtistsTable();
  initializeFavoriteSongsTable();
};

export default initializeDatabase;
