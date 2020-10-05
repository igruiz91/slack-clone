import { Button } from '@material-ui/core';
import React from 'react'
import '../css/Login.css';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

function Login() {

  const [{user}, dispatch] =useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => (
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
    )).catch(error => {
      alert(error.message)
    })
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fslack-logo-icon.png&f=1&nofb=1'
          alt='slack_logo'
        />
        <h1>Sign In to Razer Program</h1>
        <p>razerprogram.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login
