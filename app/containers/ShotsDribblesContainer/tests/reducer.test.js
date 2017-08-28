import expect from 'expect';
import shotsDribblesContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('shotsDribblesContainerReducer', () => {
  it('returns the initial state', () => {
    expect(shotsDribblesContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
