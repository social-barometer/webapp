export default () => (
  <div className="loaderWrapper">
    <p>Munching on data...</p>
    <div
      className="loader"
      style={{
        height: '300px'
      }}
      >
      <div className="pacman"><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <style jsx>{`
      .loader {
        padding-left: 30px
      }
    `}</style>
  </div>
)