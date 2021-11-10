import { TODO_TYPES } from '../actions/types'

const initialState = {
  tasks: [],
  settings: {
    bGColor: '',
    textColor: '',
  },
  savedSettings: {
    textColorR: '0',
    textColorG: '0',
    textColorB: '0',
    textColorO: '1',
    bGColorR: '199',
    bGColorG: '188',
    bGColorB: '147',
    bGColorO: '1',
  }
}

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case TODO_TYPES.SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };

    case TODO_TYPES.SET_BG_COLOR:
      return {
        ...state,
        settings: {
          ...state.settings,
          bGColor: action.payload
        }
      };

    case TODO_TYPES.SET_TEXT_COLOR:
      return {
        ...state,
        settings: {
          ...state.settings,
          textColor: action.payload
        }
      };

    case TODO_TYPES.SET_SAVED_SETTINGS:
      return {
        ...state,
        savedSettings: action.payload
      };

    default:
      return state;
  }
}
