/*
*
* LoginContainer
*
*/

import React from 'react';
import { connect } from 'react-redux';
import selectLoginContainer from './selectors';
import styles from './styles.css';
import OAuth from 'oauthio-web';
import FontAwesome from 'react-fontawesome';
import { isUserLoggedAction } from './actions';


function getOauthToken(provider){

//THIS WORKS
OAuth.OAuth.initialize('g_VUYcadw2DC9CWmoiqkD5d-B64');
OAuth.OAuth.popup(provider, {cache: true})
.done(function(result) {
  window.location.replace("http://localhost:3000/dribbbleshots");
})
.fail(function (err) {
  console.log(err);
});
}


/*
function call2(){
  let header = new Headers({
  'Access-Control-Allow-Origin': '*',
});

  let clientId = "e6dffcd25532b552c3bcd02377fd77554cce7c924b2b191bd9b14fc538c28f4b";
  fetch('https://dribbble.com/oauth/authorize?client_id='+clientId+"&redirect_uri=http://localhost:3000/dribbbleshots&state=123",{
    method: 'GET',
    mode: "cors",
    headers:  header, 
  }).then(response => console.log(response));
}
  */

export class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.isUserLoggedAction();
  }

  render() {
      //<FontAwesome className= { styles.socialIconDribbble } onClick = {() => call2()} name="dribbble" />
    return (

      <div className={styles.loginContainer}>
      <div className={styles.loginWindow}>
      <div className = {styles.loginWindowHeader}>
      <span className = {styles.loginWindowHeaderContent} >Login with you Social Account</span>
      </div>
      <div className = {styles.loginWindowBody}>
      <FontAwesome className= { styles.socialIconFacebook }  onClick = {() => getOauthToken('facebook')} name="facebook-square" />
      <FontAwesome className= { styles.socialIconGoogle } onClick = {() => getOauthToken('google_plus')} name="google-plus-square" />
      </div>
      </div>
      </div>

      );
  }
}

const mapStateToProps = selectLoginContainer();

function mapDispatchToProps(dispatch) {
  return {
    isUserLoggedAction: () => dispatch(isUserLoggedAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
