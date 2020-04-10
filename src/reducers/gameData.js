import { updateGameData, randomColors, countPoints } from '../actions/index.js';

export const gameData = dispatch => (
  state = {
    isLogInActive: true,
    characters: [{ name: 'Ragnar' }, { name: 'Otto von Duk' }, { name: 'Bruno' }],
    campaigns: [{ name: 'Kroczący w ciemności' }, { name: 'SWAT' }],
    isLogged: true,
    db: {
      id: 0,
      name: 'cechy specjalne',
      isBigSection: true,
      idCounter: 0,
      content: [
        [
          {
            id: 0,
            content: '35',
            style: '',
            type: 'text' //textArea, checkbox, number
          }
        ]
      ]
    },
    campaing: {
      isGameMaster: true,
      name: 'Kroczący w Ciemności',
      about:
        'Kampania w uniwersum warhammera. Przygody pewnej grupy włóczącej się bez celu po świecie.',
      gameMasterName: 'Garion',
      nextGameDate: '31.03.2220r.',
      players: [
        { name: 'Otto von Duk' },
        { name: 'Arsen' },
        { name: 'Olaf' },
        { name: 'Bruno' },
        { name: 'Ragnar' },
        { name: 'Jordan' }
      ]
    }
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
