import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPositionsList, getToken, getUsersList, postUser } from 'src/api/users';

export const fetchToken = createAsyncThunk('app/fetch-token', async (data, thunkApi) => {
  try {
    const response = await getToken();

    return response.data;
  } catch (error) {
    console.warn(error);
  }
});

export const fetchUsersList = createAsyncThunk(
  'app/fetch-users-list',
  async ({ count }, thunkApi) => {
    try {
      const response = await getUsersList(count);

      return response.data;
    } catch (error) {
      console.warn(error);
    }
  },
);

export const postUserData = createAsyncThunk(
  'app/post-user-data',
  async ({ data, token }, thunkApi) => {
    try {
      await postUser(data, token);

      thunkApi.dispatch(fetchUsersList());
    } catch (error) {
      console.warn(error);
    }
  },
);

export const fetchPositionsList = createAsyncThunk(
  'app/fetch-positions-list',
  async (data, thunkApi) => {
    try {
      const response = await getPositionsList();

      return response.data;
    } catch (error) {
      console.warn(error);
    }
  },
);
