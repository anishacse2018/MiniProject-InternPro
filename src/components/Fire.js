import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8IOw6-M55c-6vRyuvW9NEHwBe1wHwT4s",
    authDomain: "reactchat-549a8.firebaseapp.com",
    databaseURL: "https://reactchat-549a8.firebaseio.com",
  storageBucket: "reactchat-549a8.appspot.com"
}
firebase.initializeApp(config);



const database = firebase.database();

export {
  database,
};