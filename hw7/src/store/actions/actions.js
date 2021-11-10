import { LOGIN_TYPES, CREDENTIALS_TYPES, TODO_TYPES } from "./types"

export const authToggle = (newData) => {
  return {
      type: LOGIN_TYPES.SET_AUTH,
      payload: newData
  }
}

export const setCredentials = (newData) => {
  return {
      type: CREDENTIALS_TYPES.SET_CREDENTIALS,
      payload: newData
  }
}

export const setTasks = (newData) => {
  return {
      type: TODO_TYPES.SET_TASKS,
      payload: newData
  }
}

export const setTextColor = (newData) => {
  return {
      type: TODO_TYPES.SET_TEXT_COLOR,
      payload: newData
  }
}

export const setBGColor = (newData) => {
  return {
      type: TODO_TYPES.SET_BG_COLOR,
      payload: newData
  }
}

export const setSavedSettings = (newData) => {
  return {
      type: TODO_TYPES.SET_SAVED_SETTINGS,
      payload: newData
  }
}
