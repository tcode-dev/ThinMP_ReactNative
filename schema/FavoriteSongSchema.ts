import { Realm } from '@realm/react';

export const FAVORITE_SONG_SCHEMA_NAME = 'FavoriteSong';

export class FavoriteSongSchema extends Realm.Object {
  static schema = {
    name: FAVORITE_SONG_SCHEMA_NAME,
    properties: {
      _id: 'string',
      order: 'int',
    },
    primaryKey: '_id',
  };
}
