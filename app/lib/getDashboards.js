import {loadDB} from './db'

/**
 * Fetches all the dashboards by user.
 *
 * @param {String} uid – Firebase uid (user id)
 * @returns {Array.<Object>} – List of dashboards
 */
const getDashboards = async (uid) => {
  const db = await loadDB()
  const snapshot = await db.ref('dashboards/')
    .orderByChild('user')
    .equalTo(uid)
    .once('value')
  const dashboards = snapshot.val()

  return Object.keys(dashboards).map(d => {
    return {
      ...dashboards[d],
      ...{ id: d }
    }
  })
}

export default getDashboards