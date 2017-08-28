/*
 *
 * LoginContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  IS_USER_LOGGED_CHECKED,
} from './constants';

const initialState = fromJS({
	isUserLogged : false,
});

function loginContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
  case IS_USER_LOGGED_CHECKED:
      return state.set('isUserLogged', action.isUserLogged);
    default:
      return state;
  }
}

export default loginContainerReducer;
