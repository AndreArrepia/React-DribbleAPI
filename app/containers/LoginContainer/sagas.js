// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select } from 'redux-saga/effects';
import { IS_USER_LOGGED } from './constants';
import { takeLatest } from 'redux-saga';
import OAuth from 'oauthio-web';
import { push } from 'react-router-redux';



function* checkIfIsLogged() {
	let isUserLogged; 
	let facebook = OAuth.OAuth.create('facebook');
  	let google_plus = OAuth.OAuth.create('google_plus');
 	 if(facebook !== false || google_plus ==!false){
		yield put(push('/dribbbleshots'));
	} 
}


export function* loginSaga(){
	yield* takeLatest(IS_USER_LOGGED, checkIfIsLogged);
}

// Individual exports for testing
export function* defaultSaga() {
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
  loginSaga,
];
