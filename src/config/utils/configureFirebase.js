import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAy26zfvqD6UWPllhwTqkrc1uuvrx6JO_c",
    authDomain: "upload-1ef4c.firebaseapp.com",
    databaseURL: "https://upload-1ef4c.firebaseio.com",
    projectId: "upload-1ef4c",
    storageBucket: "upload-1ef4c.appspot.com",
    messagingSenderId: "304578967078",
    appId: "1:304578967078:web:b4919c5bb45a9e7049d8e7",
    measurementId: "G-71E5C8191B"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();