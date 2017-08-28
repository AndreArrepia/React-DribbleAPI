import { createSelector } from 'reselect';

/**
 * Direct selector to the animationContainer state domain
 */
const selectAnimationContainerDomain = () => state => state.get('animationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AnimationContainer
 */

const selectAnimationContainer = () => createSelector(
  selectAnimationContainerDomain(),
  (substate) => substate.toJS()
);

export default selectAnimationContainer;
export {
  selectAnimationContainerDomain,
};
