import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDEpQ2UWKaKdQEqc-kGqjoLkv9msiKj3v4",
    authDomain: "api-services-d873a.firebaseapp.com",
    databaseURL: "https://api-services-d873a.firebaseio.com",
    projectId: "api-services-d873a",
    storageBucket: "api-services-d873a.appspot.com",
    messagingSenderId: "526522686882",
    appId: "1:526522686882:web:ae0c35bf57e8c9cc"
  };

  let app = Firebase.initializeApp(config)
  export const db= app.database()