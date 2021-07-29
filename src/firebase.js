import firebase from "firebase";

var firebaseApp = firebase.initializeApp ( {
   apiKey: "AIzaSyCKFi2F6vCrP04EYjzuZQBhcmlDwAGQLQQ",
   authDomain: "profile-web2201gz.firebaseapp.com",
   projectId: "profile-web2201gz",
   storageBucket: "profile-web2201gz.appspot.com",
   messagingSenderId: "973041000611",
   appId: "1:973041000611:web:764c2fef5628c79e5cdf16"
   
 
   });


   var db = firebaseApp.firestore();


   export { db };