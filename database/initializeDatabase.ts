import initializeFavoriteArtistsTable from './initializeFavoriteArtistsTable';
import initializeFavoriteSongsTable from './initializeFavoriteSongsTable';
import initializePlaylistsTable from './initializePlaylistsTable';
import initializeSetting from './initializeSetting';

const initializeDatabase = () => {
  initializeSetting();
  initializeFavoriteArtistsTable();
  initializeFavoriteSongsTable();
  initializePlaylistsTable();
  initializeFavoriteSongsTable();
};

export default initializeDatabase;
