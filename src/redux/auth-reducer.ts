import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  userId: null as  number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetUserDataActionPayloadType = {
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean | null,
}

type SetUserDataActionnType = {
  type: typeof SET_USER_DATA,
  payload: SetUserDataActionPayloadType
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetUserDataActionnType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch:any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }

      dispatch(stopSubmit("login", { _error: response.data.messages[0] }));
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;

  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  
  if (response.data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false));
  }
};

export default authReducer;
