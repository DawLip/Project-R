export const socketioInit = gameToken => ({
  type: 'SOCKETIO_INIT',
  gameToken
});

export const logIn = (email, password) => ({
  type: 'LOG_IN',
  email,
  password
});

export const register = (username, email, password) => ({
  type: 'REGISTER',
  username,
  email,
  password
});

export const changeActiveInLoginPage = whatActive => ({
  type: 'CHANGE_ACTIVE_IN_LOGIN_PAGE',
  whatActive
});

export const addCharacter = () => ({
  type: 'ADD_CHARACTER'
});

export const addCampaign = () => ({
  type: 'ADD_CAMPAIGN'
});

export const editToggle = () => ({
  type: 'EDIT_TOGGLE'
});

export const changeTitle = (value, whatChange) => ({
  type: 'CHAGE_TITLE',
  value,
  whatChange
});

export const changePlayerName = (value, index) => ({
  type: 'CHAGE_PLAYER_NAME',
  value,
  index
});

export const addChampion = () => ({
  type: 'ADD_CHAMPION'
});

export const removeChampion = index => ({
  type: 'REMOVE_CHAMPION',
  index
});
