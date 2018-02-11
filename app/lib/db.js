import firebase, { auth } from '../fire'

const loadDB = async () => {
  return await firebase.database()
}

export { loadDB }