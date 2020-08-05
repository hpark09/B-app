import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDeyTiyTeay9j3s1Rr3g0Rb9Zrlb7Axyws",
    authDomain: "budget-planner-44a2f.firebaseapp.com",
    databaseURL: "https://budget-planner-44a2f.firebaseio.com",
    projectId: "budget-planner-44a2f",
    storageBucket: "budget-planner-44a2f.appspot.com",
    messagingSenderId: "126068114221"
  };


   const fire= firebase.initializeApp(config);

  export default fire;