import { updateGameData, randomColors, countPoints } from '../actions/index.js';

export const gameData = dispatch => (
  state = {
    isLogInActive: true,
    characters: [{ name: 'Ragnar' }, { name: 'Otto von Duk' }, { name: 'Bruno' }],
    campaigns: [{ name: 'Kroczący w ciemności' }, { name: 'SWAT' }],
    isLogged: true
  },
  { type, whatActive }
) => {
  switch (type) {
    case 'CHANGE_ACTIVE_IN_LOGIN_PAGE': {
      if (whatActive === 1) state.isLogInActive = true;
      else state.isLogInActive = false;
      return { ...state };
    }

    case 'ADD_CHARACTER': {
      state.characters.push({ name: 'New Character' });
      return { ...state };
    }

    case 'ADD_CAMPAIGN': {
      state.campaigns.push({ name: 'New Campaign' });
      return { ...state };
    }

    default:
      return state;
  }
};
