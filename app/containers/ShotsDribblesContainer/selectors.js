import { createSelector } from 'reselect';
import { selectLoginContainer } from '../LoginContainer/selectors';

/**
 * Direct selector to the shotsDribblesContainer state domain
 */
const selectShotsDribblesContainerDomain = () => state => state.get('shotsDribblesContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ShotsDribblesContainer
 */

const selectShotsDribblesContainer = () => createSelector(
  selectShotsDribblesContainerDomain(),
  (substate) =>  substate.toJS()
);

export default selectShotsDribblesContainer;
export {
  selectShotsDribblesContainerDomain,
};
