import { Action, ThunkAction } from '@reduxjs/toolkit'
import md5 from 'md5';
import { store } from '.'

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;