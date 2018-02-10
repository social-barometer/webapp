import firebase, { auth } from '../firebase'

const loadDB = async () => {
  return await firebase.database()
}

export { loadDB }