import { Realm } from '@realm/react';

export class Todo extends Realm.Object<Todo> {
  _id!: Realm.BSON.ObjectId;
  name!: string;

  static generate(id, name) {
    return {
      _id: id, // can generate id here as well
      name: name,
    };
  }

  static schema = {
    name: 'Todo',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
  };
}
