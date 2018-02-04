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
)(({ center, markers }) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={center}
  >
    { markers.map((m, i) =>
      <Marker key={i} position={{lat: m.lat, lng: m.lng }} />
    )}
  </GoogleMap>
)

export default CrimeMap