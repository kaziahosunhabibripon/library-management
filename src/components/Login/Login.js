import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import GoogleButton from 'react-google-button'
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleGoogleSignIn = () => {
        const GhProvider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth()
            .signInWithPopup(GhProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email };
                setLoggedInUser(signInUser);
                storeAuthToken();
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorMessage);

            });
    }
    const storeAuthToken = ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token',idToken);
          
          }).catch(function(error) {
           
          });
    }
    return (
        <div className="text-center my-2 py-2">
            <GoogleButton  onClick={handleGoogleSignIn} className="btn-google"/>
        </div>
    );
};

export default Login;