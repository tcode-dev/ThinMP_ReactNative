import Realm from 'realm';
import { FAVORITE_SONG_SCHEMA_NAME, FavoriteSongSchema } from '@/schema/FavoriteSongSchema';

export type FavoriteSongModel = Realm.Object & {
  _id: string;
  order: number;
};

const realm = new Realm({
  schema: [FavoriteSongSchema],
});

export const addFavoriteSong = (id: string) => {
  realm.write(() => {
    realm.create(FAVORITE_SONG_SCHEMA_NAME, {_id: id, order: 0});
  });
};

export const getFavoriteSongs = (): Pick<FavoriteSongModel, '_id' | 'order'>[] => {
  const favoriteSongs = realm.objects<FavoriteSongModel>(FAVORITE_SONG_SCHEMA_NAME);

  return favoriteSongs.map(song => ({ _id: song._id, order: song.order }));
};
