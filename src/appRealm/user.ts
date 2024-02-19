import { Realm } from '@realm/react';
import { Dayjs } from 'dayjs';

export class User extends Realm.Object<User> {
  _id!: Realm.BSON.ObjectId;
  firstName!: string;
  lastName!: string;
  startDate!: string; // use dayjs to parse
  isNewUser!: boolean;
  settingsId!: Realm.BSON.ObjectId[];

  public static generateNew(
    firstName: string,
    lastName: string,
    settingsId: Realm.BSON.ObjectId,
  ) {
    return {
      _id: new Realm.BSON.ObjectId(),
      firstName: firstName,
      lastName: lastName,
      startDate: new Dayjs().format('YYYYMMDD'),
      isNewUser: true,
      settingsId: settingsId,
    };
  }

  public static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      firstName: 'string',
      lastName: 'string',
      startDate: 'string',
      isNewUser: 'bool',
      settingsId: 'objectId',
    },
  };
}
