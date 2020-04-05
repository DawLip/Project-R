export const socketioInit = gameToken => ({
  type: 'SOCKETIO_INIT',
  gameToken
});

export const changeActiveInLoginPage = whatActive => ({
  type: 'CHANGE_ACTIVE_IN_LOGIN_PAGE',
  whatActive
});
