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
