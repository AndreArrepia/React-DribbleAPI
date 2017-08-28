import expect from 'expect';
import animationContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('animationContainerReducer', () => {
  it('returns the initial state', () => {
    expect(animationContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
