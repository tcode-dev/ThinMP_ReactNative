import initializeFavoriteArtistsTable from './initializeFavoriteArtistsTable';
import initializeFavoriteSongsTable from './initializeFavoriteSongsTable';
import initializePlaylistSongsTable from './initializePlaylistSongsTable';
import initializePlaylistsTable from './initializePlaylistsTable';
import initializeSetting from './initializeSetting';
import initializeShortcutsTable from './initializeShortcutsTable';

const initializeDatabase = () => {
  initializeSetting();
  initializeFavoriteArtistsTable();
  initializeFavoriteSongsTable();
  initializePlaylistsTable();
  initializePlaylistSongsTable();
  initializeShortcutsTable();
};

export default initializeDatabase;
