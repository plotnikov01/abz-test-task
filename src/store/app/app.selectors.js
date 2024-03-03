import { createSelector } from '@reduxjs/toolkit';

const getState = (state) => state.app;

export const usersListSelector = createSelector(getState, (state) => state.usersList);
export const positionsListSelector = createSelector(getState, (state) => state.positionsList);
