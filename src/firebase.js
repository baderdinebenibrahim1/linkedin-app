import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAdugw19FtvK5MPLnTCEMHh6W2C5qpB6Pg",
    authDomain: "linkedin-app-2d042.firebaseapp.com",
    projectId: "linkedin-app-2d042",
    storageBucket: "linkedin-app-2d042.appspot.com",
    messagingSenderId: "574689869939",
    appId: "1:574689869939:web:c03cdf4670099ad9c4ea06"
});


const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export  {db, auth};