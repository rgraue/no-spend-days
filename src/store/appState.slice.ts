import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

export interface MetaSlice {
  today: Dayjs;
  userId: Realm.BSON.ObjectId | null;
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    today: dayjs(),
    userId: null,
  } as MetaSlice,
  reducers: {
    setUser: (state, action: PayloadAction<Realm.BSON.ObjectId>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUser } = metaSlice.actions;
