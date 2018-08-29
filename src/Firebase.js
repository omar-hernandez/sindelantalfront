import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD52Lqssr9QgBlkOZnID8kpjFapCtA3LTU",
    authDomain: "fotos-airbnb.firebaseapp.com",
    databaseURL: "https://fotos-airbnb.firebaseio.com",
    projectId: "fotos-airbnb",
    storageBucket: "fotos-airbnb.appspot.com",
    messagingSenderId: "544582156305"
  };

  export default firebase.initializeApp(config)