import { IUser } from '../../models/IUser';
import { ICalendar } from '../../models/ICalendar';
import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '../../service/userApi';

interface IGuestState {
  guests: IUser[];
  events: ICalendar[];
}

const initialState: IGuestState = {
  guests: [],
  events: [],
};

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    setGuest: (
      state,
      action: {
        payload: IUser[];
      },
    ) => {
      state.guests = action.payload;
    },
    setEvents: (
      state,
      action: {
        payload: ICalendar[];
      },
    ) => {
      state.events.push(action.payload[0]);
    },
    removeEvent(state, action) {
      state.events = state.events.filter((event) => event.date !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
      state.guests = action.payload;
    });
  },
});

export const { setGuest, setEvents, removeEvent } = guestSlice.actions;

export default guestSlice.reducer;
