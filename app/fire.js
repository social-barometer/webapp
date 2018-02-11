import firebase from 'firebase'
import secrets from './secrets.json'

if (!firebase.apps.length) {
  firebase.initializeApp(secrets.firebase);
}

export const provider = new firebase.auth.TwitterAuthProvider();
export const auth = firebase.auth();
export default firebase