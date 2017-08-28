/*
 *
 * AnimationContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  IS_USER_LOGGED,
} from './constants';

export function isUserLoggedAction() {
  return {
    type: IS_USER_LOGGED,
  };
}


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
