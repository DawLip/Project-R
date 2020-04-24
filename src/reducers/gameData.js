// import { updateGameData, randomColors, countPoints } from '../actions/index.js';

const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: '/graphql'
});

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
      isEditMode: true,
      name: 'Kroczący w Ciemności',
      about:
        'Kampania w uniwersum warhammera. Przygody pewnej grupy włóczącej się bez celu po świecie.',
      gameMasterName: 'Garion',
      nextGameDate: 'Game is planed for 31.03.2220r.',
      players: [
        { name: 'Otto von Duk' },
        { name: 'Arsen' },
        { name: 'Olaf' },
        { name: 'Bruno' },
        { name: 'Ragnar' },
        { name: 'Jordan' },
        { name: 'Jordan' }
      ]
    }
  },
  { type, whatActive, value, whatChange, index }
) => {
  switch (type) {
    case 'LOG_IN': {
      // fetch({
      //   query: `{
      //     accessCode(password:"${password}")
      //   }`
      // }).then(res => {
      //   console.log(res);
      //   // dispatch(
      //   //   updateData({
      //   //     accessCode: res.data.accessCode,
      //   //     redirect: '/menu'
      //   //   })
      //   // );
      // });
      console.log('login');
    }

    case 'REGISTER': {
      console.log('redister');
      fetch({
        query: '{ createUser}'
      }).then(res => {
        console.log(res);
      });
    }

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

    case 'EDIT_TOGGLE': {
      state.campaing.isEditMode = !state.campaing.isEditMode;
      return { ...state };
    }

    case 'CHAGE_TITLE': {
      state.campaing[whatChange] = value;
      return { ...state };
    }

    case 'CHAGE_PLAYER_NAME': {
      state.campaing.players[index].name = value;
      return { ...state };
    }

    case 'ADD_CHAMPION': {
      state.campaing.players.push({ name: 'New Champion' });
      return { ...state };
    }

    case 'REMOVE_CHAMPION': {
      state.campaing.players.splice(index, 1);
      return { ...state };
    }
    default:
      return state;
  }
};
