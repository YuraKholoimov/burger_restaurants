import  Rebase  from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAlayAx_LCDMwq0s-qF2tDwMWUVbTRtuYo",
    authDomain: "burgers-48eaa.firebaseapp.com",
    databaseURL: "https://burgers-48eaa-default-rtdb.firebaseio.com",

})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;