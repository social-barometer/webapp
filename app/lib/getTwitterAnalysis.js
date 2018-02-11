import { loadDB } from './db'

/**
 * Fetches tweets for a given dashboard
 *
 * @param {String} dashboard – Dashboard identifier
 * @returns {Array.<Tweet>}
 */
const getTwitterAnalysis = async (dashboard) => {
  console.log(dashboard)
  if (!dashboard) return []
  const db = await loadDB()
  const snapshot = await db.ref('/twitterAnalysis')
    .orderByChild('dashboard')
    .equalTo(dashboard)
    .limitToLast(10)
    .once('value')
  const values = snapshot.val()
  return values
    ? Object.values(values)
        .map(x => ({ emotion: x.emotion, sentiment: x.sentiment, time: x.time}))
    : []
}

export default getTwitterAnalysis