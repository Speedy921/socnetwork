import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  inFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUserCount: action.count };
    }
    case TOOGLE_IS_FETCHING: {
      return { ...state, inFetching: action.inFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId: userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFectching = (inFetching) => ({
  type: TOOGLE_IS_FETCHING,
  inFetching,
});
export const toggleFollowinngProgress = (inFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  inFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFectching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setCurrentPage(page));
      dispatch(toggleIsFectching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowinngProgress(true, userId));
    usersAPI.followSuccess(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowinngProgress(false, userId));
    });
  };
};

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowinngProgress(true, userId));
    usersAPI.unfollowSuccess(userId).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowinngProgress(false, userId));
    });
  };
};

export default usersReducer;
