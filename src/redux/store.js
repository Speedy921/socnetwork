import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "Its my first post", likesCount: 11 },
        { id: 3, message: "Чому не державною", likesCount: 1488 },
      ],
      newPostText: "it.com",
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Yarik" },
        { id: 3, name: "Vasya" },
        { id: 4, name: "OlyaUA" },
        { id: 5, name: "Kebab" },
        { id: 6, name: "TumbaYmba" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Zopa" },
        { id: 3, message: "Popa" },
        { id: 4, message: "Шо делаешь голова" },
        { id: 5, message: "и шо " },
        { id: 6, message: "та похер" },
      ],
      newMessageBody: "",
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
