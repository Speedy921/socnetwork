const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
    { id: 4, message: "wkenfwkjnefksjk" },
    { id: 5, message: "лол" },
    { id: 6, message: "кек" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 7, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
