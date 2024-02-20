import { Realm } from '@realm/react';

// Persitant settinsg data
export class Settings extends Realm.Object<Settings> {
  _id!: Realm.BSON.ObjectId;

  // Shouldn't need to generate more then once...
  public static generate() {
    return {
      _id: new Realm.BSON.ObjectId(),
    };
  }

  public static schema = {
    name: 'Settings',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
    },
  };
}
