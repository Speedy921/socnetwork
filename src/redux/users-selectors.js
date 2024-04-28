export const getUsers = (state) => {
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
