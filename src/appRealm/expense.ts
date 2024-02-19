import { Realm } from '@realm/react';

export class Expense extends Realm.Object<Expense> {
  _id!: Realm.BSON.ObjectId;
  amount!: number;
  category!: string;

  public static generate(amount: number, category = 'INSPECIFIED') {
    return {
      _id: new Realm.BSON.ObjectId(),
      amount: amount,
      category: category,
    };
  }

  public static schema = {
    name: 'Expense',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      amount: 'double',
      category: 'string',
    },
  };
}
