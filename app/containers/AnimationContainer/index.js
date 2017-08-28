/*
 *
 * AnimationContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAnimationContainer from './selectors';
import { isUserLoggedAction } from './actions';
import styles from './styles.css';

export class AnimationContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
  this.props.isUserLoggedAction();
}

  render() {
    return (
      <div className={ styles.animationContainer }>
  		<svg className={ styles.cls} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70.01">
          <path className={ styles.clsc1} d="M0,70V0H70V70H0ZM2.63,2.61V67.37H67.39V2.61H2.63Z" transform="translate(0 0)"></path>
          <path className={ styles.clsc2} d="M41.75,40.6H53.09a1.62,1.62,0,0,1,1.8,1.78c0,0.93,0,1.87,0,2.8a1.53,1.53,0,0,1-1.58,1.49H43.93l4.22,11.6H41.52A0.33,0.33,0,0,1,41.15,58c-1.19-3.29-3.9-10.64-4-11a0.41,0.41,0,0,0-.43-0.31h-7a0.41,0.41,0,0,0-.45.32c-0.64,1.75-3.35,9.11-4.06,11a0.4,0.4,0,0,1-.28.23H18.42l-0.1,0L22.49,47c0.24-.65.48-1.3,0.73-1.94a0.25,0.25,0,0,0-.14-0.38,14,14,0,0,1-6.66-7.18,20.12,20.12,0,0,1-1.6-5.89,16.32,16.32,0,0,1,0-4.51,26.93,26.93,0,0,1,.76-3.64A23.49,23.49,0,0,1,17.1,20a13,13,0,0,1,4.28-4.85,16.94,16.94,0,0,1,9.87-2.94c4.36,0,8.71,0,13.07,0a0.78,0.78,0,0,1,.78.41,0.79,0.79,0,0,1-.09.88c-0.75,1.11-1.46,2.26-2.27,3.33A3.42,3.42,0,0,1,40,18.3c-2.6,0-5.19,0-7.79,0a10.48,10.48,0,0,0-6.4,2.3,11.32,11.32,0,0,0-3.44,4.56,10.63,10.63,0,0,0-.79,5.49,11.34,11.34,0,0,0,2.1,5.41,20.78,20.78,0,0,0,1.64,1.84,1.6,1.6,0,0,0,.25.18c0.28-.77,4-11,4.44-12.17a3.72,3.72,0,0,1,2.73-2.46,3,3,0,0,1,2.91,1.21,7.32,7.32,0,0,1,1.24,2.58C38.18,30.81,41.41,39.7,41.75,40.6Zm-9.93-.09H35c-0.39-1.08-.76-2.12-1.16-3.15a0.46,0.46,0,0,0-.82,0,4,4,0,0,0-.2.51Z" transform="translate(0 0)"></path>
      	</svg>
      </div>
    );
  }
}

const mapStateToProps = selectAnimationContainer();

function mapDispatchToProps(dispatch) {
  return {
    isUserLoggedAction: () => dispatch(isUserLoggedAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimationContainer);
