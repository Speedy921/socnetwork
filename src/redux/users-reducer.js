const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      followed: false,
      fullName: "Dmitriy",
      status: "I am a boss",
      location: { city: "Kyiv", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      followed: false,
      fullName: "Sasha",
      status: "I am an engenier",
      location: { city: "Dnipro", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      followed: true,
      fullName: "Yarik",
      status: "I am a driver",
      location: { city: "Manchester", country: "UK" },
    },
    {
      id: 4,
      photoUrl: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
      followed: true,
      fullName: "Maks",
      status: "I am a barista",
      location: { city: "Kharkiv", country: "Ukraine" },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
