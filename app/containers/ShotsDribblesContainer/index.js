/*
 *
 * ShotsDribblesContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectShotsDribblesContainer from './selectors';
import styles from './styles.css';
import ShotsDribble from '../../components/ShotsDribble';
import { requestDribbleShot, toggleOrderShots,  filterShotsByTag, isUserLoggedAction} from './actions';
import OAuth from 'oauthio-web';


export class ShotsDribblesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  static propTypes = {
    requestDribbleShot : React.PropTypes.func.isRequired
  }


  componentWillMount(){
    this.props.isUserLoggedAction();
    this.props.requestDribbleShot();
  }

  render() {
    return (
      <ShotsDribble {...this.props}/>
    );
  }
}

const mapStateToProps = selectShotsDribblesContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestDribbleShot: () => dispatch(requestDribbleShot()),
    toggleOrderShots: () => dispatch(toggleOrderShots()),
    filterShotsByTag: (filter) => dispatch(filterShotsByTag(filter)),
    isUserLoggedAction : () => dispatch(isUserLoggedAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShotsDribblesContainer);
