import initializeFavoriteArtistsTable from './initializeFavoriteArtistsTable';
import initializeFavoriteSongsTable from './initializeFavoriteSongsTable';
import initializePlaylistSongsTable from './initializePlaylistSongsTable';
import initializePlaylistsTable from './initializePlaylistsTable';
import initializeSetting from './initializeSetting';

const initializeDatabase = () => {
  initializeSetting();
  initializeFavoriteArtistsTable();
  initializeFavoriteSongsTable();
  initializePlaylistsTable();
  initializePlaylistSongsTable();
};

export default initializeDatabase;
