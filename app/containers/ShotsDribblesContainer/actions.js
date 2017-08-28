/*
 *
 * ShotsDribblesContainer actions
 *
 */

 import {
 	REQUEST_DRIBBLE_SHOTS,
 	REQUEST_DRIBBLE_SHOTS_SUCCEEDED,
 	REQUEST_DRIBBLE_SHOTS_FAILED,
 	TOGGLE_ORDER_SHOTS,
 	FILTER_BY_TAG_SHOTS,
 	IS_USER_LOGGED,
 } from './constants';


 export function isUserLoggedAction() {
  return {
    type: IS_USER_LOGGED,
  };
}
 
 export function requestDribbleShotFailed(message) {
 	return {
 		type: REQUEST_DRIBBLE_SHOTS_FAILED,
 		message,
 	};
 }


 export function requestDribbleShotSucceeded(dribbleShots) {
 	return {
 		type: REQUEST_DRIBBLE_SHOTS_SUCCEEDED,
 		dribbleShots,
 	};
 }

 export function requestDribbleShot() {
 	return {
 		type: REQUEST_DRIBBLE_SHOTS,
 	};
 }

 export function toggleOrderShots() {
 	return {
 		type: TOGGLE_ORDER_SHOTS,
 	};
 }

 export function filterShotsByTag(filter) {
 	return {
 		type: FILTER_BY_TAG_SHOTS,
 		filter,
 	};
 }


