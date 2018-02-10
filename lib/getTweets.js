import { loadDB } from './db'

/**
 * Fetches tweets for a given dashboard
 *
 * @param {String} dashboard – Dashboard identifier
 * @returns {Array.<Tweet>}
 */
const getTweets = async (dashboard) => {
  const db = await loadDB()
  const snapshot = await db.ref('/tweets')
    .orderByChild('dashboard')
    .once('value')

  return Object.values(snapshot.val())
}

export default getTweets