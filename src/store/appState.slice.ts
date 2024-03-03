import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface MetaSlice {
  today: string;
  userId: string | null;
  settingsId: string | null;
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    today: dayjs().format('YYYYMMDD'),
    userId: null,
    settingsId: null,
  } as MetaSlice,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      console.log('setting redux userId', action.payload);
      state.userId = action.payload;
    },
    setSettings: (state, action: PayloadAction<string>) => {
      console.log('setting redux settingsId', action.payload);
      state.settingsId = action.payload;
    },
    clearState: state => {
      console.log('clearing redux user state');
      state.userId = null;
      state.settingsId = null;
    },
  },
});

export const { setUser, setSettings, clearState } = metaSlice.actions;
