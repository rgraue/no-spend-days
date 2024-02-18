import { createRealmContext } from '@realm/react';
import { Todo } from './todo';

export * from './todo';

export const TodoRealmContext = createRealmContext({
  schema: [Todo],
  deleteRealmIfMigrationNeeded: true,
});
