/*
 *
 * ShotsDribblesContainer reducer
 *
 */

 import { fromJS } from 'immutable';
 import {
 	REQUEST_DRIBBLE_SHOTS,
 	REQUEST_DRIBBLE_SHOTS_SUCCEEDED,
 	REQUEST_DRIBBLE_SHOTS_FAILED,
 	TOGGLE_ORDER_SHOTS,	
 	FILTER_BY_TAG_SHOTS,
 } from './constants';

 const initialState = fromJS({
 	dribbleShots: [],
 	isOrderDesc: false,
 	filter: [],
 });


 /*function addFilter(state, filter){
	return state.set('filter', Object.assign(state.get('filter'), [filter]));
} */

 function shotsDribblesContainerReducer(state = initialState, action) {
 	switch (action.type) {
 		case REQUEST_DRIBBLE_SHOTS_SUCCEEDED:
			return state.set('dribbleShots', action.dribbleShots);
		case TOGGLE_ORDER_SHOTS:
			return state.set('isOrderDesc', !state.get('isOrderDesc'));
		case FILTER_BY_TAG_SHOTS:
			let oldFitlers = state.get('filter');
			if(action.filter !== null && typeof action.filter !== null ){
				if(oldFitlers.indexOf(action.filter) == -1){
					oldFitlers.push(action.filter);
				}else{
					oldFitlers.splice(oldFitlers.indexOf(action.filter),1);
				}
			}else{
				oldFitlers = [];
			}
			return state.set('filter', Object.assign([], oldFitlers));
 		default:
 		return state;
 	}
 }

 export default shotsDribblesContainerReducer;
