import fetch from 'isomorphic-unfetch'
import CrimeMap from '../components/CrimeMap';
import ChartistGraph from '../components/ChartistGraph';
import Layout from '../components/Layout'

const crimeMapExample = ({ center, crimes, categories }) => (
  <Layout>
    <h3>Crime map:</h3>
    <CrimeMap center={center} crimes={crimes} />
    <h3>Frequencies of crime types</h3>
    <ChartistGraph
      data={categories}
      options={{
        distributedSeries: true,
      }}
      type="Bar"
      />
  </Layout>
)

crimeMapExample.getInitialProps = async ({ req }) => {
  const center = { lat: 51.492983, lng: -0.114283 }
  const resp = await fetch(
    `https://data.police.uk/api/crimes-street/all-crime?lat=${center.lat}&lng=${center.lng}&date=2017-1`
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

  console.log(json.length)
  
  return {
    center: center,
    crimes: crimes,
    categories: categories
  }
}

export default crimeMapExample