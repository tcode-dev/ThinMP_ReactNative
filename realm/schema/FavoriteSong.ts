import { Realm } from '@realm/react';

export class FavoriteSong extends Realm.Object {
  static schema = {
    name: 'FavoriteSong',
    properties: {
      _id: 'string',
      order: 'int',
    },
    primaryKey: '_id',
  };
}
