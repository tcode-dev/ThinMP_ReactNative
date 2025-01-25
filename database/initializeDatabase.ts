import initializeFavoriteSongsTable from './initializeFavoriteSongsTable';
import initializeSetting from './initializeSetting';

const initializeDatabase = () => {
  initializeSetting();
  initializeFavoriteSongsTable();
};

export default initializeDatabase;