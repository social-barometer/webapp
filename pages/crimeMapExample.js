import fetch from 'isomorphic-unfetch'
import CrimeMap from '../components/CrimeMap';
import Layout from '../components/Layout'

const center = { lat: 51.492983, lng: -0.114283 }

const crimeMapExample = ({ center, markers }) => (
  <Layout>
    <h4>Crime map:</h4>
    <CrimeMap center={center} markers={markers} />
  </Layout>
)

crimeMapExample.getInitialProps = async ({ req }) => {
  const resp = await fetch(
    `https://data.police.uk/api/crimes-street/all-crime?lat=${center.lat}&lng=${center.lng}&date=2017-1`
  )
  const json = await resp.json()
  const markers = json.map(x => ({
    category: x.category.replace(/\-/g, ' '),
    lat: Number(x.location.latitude),
    lng: Number(x.location.longitude),
  }))
  console.log(markers)
  return {
    center: center,
    markers: markers
  }
}

export default crimeMapExample