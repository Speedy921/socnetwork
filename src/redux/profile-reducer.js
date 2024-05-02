import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "Its my first post", likesCount: 11 },
    { id: 3, message: "Чому не державною", likesCount: 1488 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id != action.postId),
      };

    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
});

export default profileReducer;
