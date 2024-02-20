import { Realm } from '@realm/react';
import { Dayjs } from 'dayjs';
import { ALL_DAYS, getDayOfWeek } from '@utils';

export class Day extends Realm.Object<Day> {
  _id!: Realm.BSON.ObjectId;
  date!: string; // use dayjs to parse
  year!: number;
  month!: number;
  day!: number;
  dayOfWeek!: ALL_DAYS;
  expenses!: Realm.BSON.ObjectId[];

  public static generate(date: Dayjs, expense?: Realm.BSON.ObjectId) {
    return {
      _id: new Realm.BSON.ObjectId(),
      date: date.format('YYYYMMDD'),
      year: date.year(),
      month: date.month(),
      day: date.date(),
      dayOfWeek: getDayOfWeek(date.date()),
      expenseIds: expense ? [expense] : [],
    };
  }

  public static schema = {
    name: 'Day',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      date: 'string',
      year: 'int',
      month: 'int',
      day: 'int',
      dayOfWeek: 'string',
      expenseIds: 'objectId[]',
    },
  };
}
