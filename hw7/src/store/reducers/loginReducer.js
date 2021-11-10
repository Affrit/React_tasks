import { LOGIN_TYPES } from "../actions/types";
import { CREDENTIALS_TYPES } from "../actions/types";

const initialState = {
  isAuth: false,
  credentials: {
    name: '',
    email: '',
    password: ''
  },
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_TYPES.SET_AUTH:
      return {
        ...state,
        isAuth: action.payload
      };

    case CREDENTIALS_TYPES.SET_CREDENTIALS:
      return {
        ...state,
        credentials: action.payload
      };
    default:
      return state;
  }
}
