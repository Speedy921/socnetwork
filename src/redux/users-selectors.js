import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const gettotalUserCount = (state) => {
  return state.usersPage.totalUserCount;
};

export const getcurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getisFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getfollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});
