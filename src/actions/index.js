export const socketioInit = gameToken => ({
  type: 'SOCKETIO_INIT',
  gameToken
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
