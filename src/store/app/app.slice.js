import { createSlice } from '@reduxjs/toolkit';

import { fetchPositionsList, fetchUsersList, postUserData } from './app.actions';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    usersList: [],
    token: null,
    positionsList: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsersList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.usersList = action.payload;
    });
    builder.addCase(fetchUsersList.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postUserData.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(postUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchPositionsList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPositionsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.positionsList = action.payload;
    });
    builder.addCase(fetchPositionsList.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default appSlice.reducer;
