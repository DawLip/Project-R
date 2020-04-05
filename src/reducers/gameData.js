import { updateGameData, randomColors, countPoints } from '../actions/index.js';

export const gameData = dispatch => (
  state = {
    isLogInActive: true
  },
  { type, whatActive }
) => {
  switch (type) {
    case 'CHANGE_ACTIVE_IN_LOGIN_PAGE': {
      if (whatActive === 1) state.isLogInActive = true;
      else state.isLogInActive = false;

      return { ...state };
    }

    default:
      return state;
  }
};
