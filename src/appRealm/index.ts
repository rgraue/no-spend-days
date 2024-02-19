import { createRealmContext } from '@realm/react';
import { Expense } from './expense';
import { Day } from './day';
import { Settings } from './settings';
import { User } from './user';

export * from './expense';
export * from './day';
export * from './settings';
export * from './user';

// Realm Context for persistent data
export const realmContext = createRealmContext({
  schema: [Expense, Day, Settings, User],
  deleteRealmIfMigrationNeeded: true,
});
