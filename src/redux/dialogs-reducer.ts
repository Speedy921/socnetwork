const SEND_MESSAGE = "SEND-MESSAGE";

type DialogsType = {
  id: number;
  name: string;
}

type MessageType = { 
  id: number;
  message: string;
}

let initialState = {
  dialogsData: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Yarik" },
    { id: 3, name: "Vasya" },
    { id: 4, name: "OlyaUA" },
    { id: 5, name: "Kebab" },
    { id: 6, name: "TumbaYmba" },
  ] as Array<DialogsType>,
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Zopa" },
    { id: 3, message: "Popa" },
    { id: 4, message: "wkenfwkjnefksjk" },
    { id: 5, message: "лол" },
    { id: 6, message: "кек" },
  ] as Array<MessageType>,
  newMessageBody: "",
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

type SendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
}

export const sendMessageActionCreator = (newMessageBody: string): SendMessageActionCreatorType  => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
 