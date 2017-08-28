// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { REQUEST_DRIBBLE_SHOTS, REQUEST_DRIBBLE_SHOTS_SUCCEEDED, REQUEST_DRIBBLE_SHOTS_FAILED, IS_USER_LOGGED } from './constants';
import { requestDribbleShotSucceeded, requestDribbleShotFailed } from './actions';
import { push } from 'react-router-redux';
import OAuth from 'oauthio-web';

export function fetchShotsDribbleFromServer(){
	return fetch('https://api.dribbble.com/v1/shots?access_token=bcff5e7ba5dd9a583289cdbb6b21a7fe3fbae3e5714fafe61765a3977df14919').then(response => response.json());
}


function* checkIfIsLogged() {
	let isUserLogged; 
	let facebook = OAuth.OAuth.create('facebook');
  	let google_plus = OAuth.OAuth.create('google_plus');
 	 if(facebook === false && google_plus === false){
	
		yield put(push('/'));
	} 
}


//call object from the server
function* fetchShotsDribble() {
	try{
		const dribble_shots = yield call(fetchShotsDribbleFromServer);
		yield put(requestDribbleShotSucceeded(dribble_shots));
	}catch(e){
		yield put(requestDribbleShotFailed(e.message));
	}
}

export function* isUserLoggedSaga(){
	yield* takeLatest(IS_USER_LOGGED, checkIfIsLogged)
}

export function* fetchShotsDribbleSaga(){
	yield* takeLatest(REQUEST_DRIBBLE_SHOTS, fetchShotsDribble)
}

// All sagas to be loaded
export default [
  fetchShotsDribbleSaga,
  isUserLoggedSaga,
];
