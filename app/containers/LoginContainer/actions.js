/*
 *
 * LoginContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  IS_USER_LOGGED,
  IS_USER_LOGGED_CHECKED
} from './constants';

export function isUserLoggedAction() {
  return {
    type: IS_USER_LOGGED,
  };
}

export function isUserLoggedCheckedAction(isUserLogged) {
  return {
    type: IS_USER_LOGGED_CHECKED,
    isUserLogged,
  };
}


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
