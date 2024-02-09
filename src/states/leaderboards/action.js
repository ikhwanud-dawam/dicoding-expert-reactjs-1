import api from "../../utils/api"
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
}

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    }
  }
}

function asyncReceiveLeaderboards() {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const leaderboards = await api.seeLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
    
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveLeaderboardsActionCreator,
  asyncReceiveLeaderboards,
}