import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface MetaSlice {
  today: string;
  userId: string | null;
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    today: dayjs().format('YYYYMMDD'),
    userId: null,
  } as MetaSlice,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
});

export const { setUser } = metaSlice.actions;
