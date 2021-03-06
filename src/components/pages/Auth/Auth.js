import React from 'react';
import firebase from 'firebase/app';

const Auth = () => {
  console.warn('Auth called');
  const loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
    <div className="Auth">
      <button className="btn btn-success" onClick={loginClickEvent}>Log in</button>
    </div>
  );
};

export default Auth;
