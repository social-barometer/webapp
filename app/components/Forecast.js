export default ({ name, coors, height, width, color }) => (
  <div>
    <iframe
      src={`//forecast.io/embed/#lat=${coors.lat}&lon=${coors.lng}&name=${name}&units=si&color=${color ? color : ''}`}
      height={ height }
      width={ width }
      frameBorder="0"></iframe>
  </div>
)