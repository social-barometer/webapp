/**
 * Get crimes from UK by location
 *
 * @param {Object} center – Location of the query
 * @param {String|Number} center.lat – Latitude co-ordinates
 * @param {String|Number} center.lng – Longitude co-ordinates
 * @returns {Object} – Crime object for consumption
 */

const getCrime = async (center) => {
  const latestDate = await fetch('https://data.police.uk/api/crimes-street-dates')
    .then(x => x.json())
    .then(x => x[0].date)

  const resp = await fetch(
    `https://data.police.uk/api/crimes-street/all-crime?lat=${center.lat}&lng=${center.lng}&date=${latestDate}`
  )
  const json = await resp.json()
  const crimes = json.map(x => ({
    category: x.category.replace(/\-/g, ' '),
    lat: Number(x.location.latitude),
    lng: Number(x.location.longitude),
  }))

  // Get crime categories and their frequencies in the data
  const categories = crimes
    .map(c => c.category)
    .reduce((acc, cur) => {
      const index = acc.labels.indexOf(cur)
      if (index < 0) {
        acc.labels.push(cur)
        acc.series[0].push(1)
      } else {
        acc.series[0][index] = acc.series[0][index] + 1
      }
      return acc
    }, {
      labels: [],
      series: [[]]
    })

  return {
    center: center,
    crimes: crimes,
    categories: categories
  }
}

export default getCrime