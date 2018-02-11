import {loadDB} from './db'

/**
 * Fetches dashboard info
 *
 * @param {String} did – Firebase dashboard identifier
 * @returns {Object} – Info of the given dashboard
 */
const getDashboardInfo = async (did) => {
  const db = await loadDB()
  const snapshot = await db.ref('dashboards/' + did)
    .once('value')

  const dashboard = snapshot.val()

  return dashboard
}

export default getDashboardInfo