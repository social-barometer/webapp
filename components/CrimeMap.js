import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import secrets from '../secrets.json'

const mapURL =
  `https://maps.googleapis.com/maps/api/js?key=${secrets.googleMapsAPIKey}&v=3.exp&libraries=geometry,drawing,places`

const CrimeMap = compose(
  withProps({
    googleMapURL: mapURL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ center, crimes }) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={center}
  >
    { crimes.map((c, i) =>
      <Marker key={i} position={{lat: c.lat, lng: c.lng }} />
    )}
  </GoogleMap>
)

export default CrimeMap