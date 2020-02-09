import typeToReducer from 'type-to-reducer';

import { SOCCER } from '../shared/constants';

const baseState = {
  isLoading: false,
  error: false,
};

const initialLeaguesState = {
  ...baseState,
  leagues: []
};

const initialTeamsState = {
  ...baseState,
  teams: []
};

const initialSquadState = {
  ...baseState,
  squad: []
};

export const leaguesReducer = typeToReducer(
  {
    [SOCCER.LEAGUES]: {
      PENDING: () => ({
        ...initialLeaguesState,
        isLoading: true
      }),
      REJECTED: (state, action) => ({
        ...initialLeaguesState,
        error: true
      }),
      FULFILLED: (state, action) => ({
        ...initialLeaguesState,
        leagues: action.payload
      })
    }
  },
  initialLeaguesState
);

export const teamsReducer = typeToReducer(
  {
    [SOCCER.TEAMS]: {
      PENDING: () => ({
        ...initialTeamsState,
        isLoading: true
      }),
      REJECTED: (state, action) => ({
        ...initialTeamsState,
        error: true
      }),
      FULFILLED: (state, action) => ({
        ...initialTeamsState,
        teams: action.payload
      })
    }
  },
  initialTeamsState
);

export const squadReducer = typeToReducer(
  {
    [SOCCER.SQUADS]: {
      PENDING: () => ({
        ...initialSquadState,
        isLoading: true
      }),
      REJECTED: (state, action) => ({
        ...initialSquadState,
        error: true
      }),
      FULFILLED: (state, action) => ({
        ...initialSquadState,
        squad: action.payload
      })
    }
  },
  initialSquadState
);
