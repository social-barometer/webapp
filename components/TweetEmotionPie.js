import ChartistGraph from './ChartistGraph'

export default ({ title, tweets }) => {

  // Reduce tweets to a object of summed emotions
  const emotions = tweets
    .map(t => t.emotion)
    .reduce((acc, cur) => {
      Object.keys(cur).forEach(k => {
        acc[k] = acc[k] ? acc[k] + cur[k] : cur[k]
      })
      return acc
    }, {})

  // Get total sum of emotions
  const sum = Object.keys(emotions).reduce((acc, cur) => {
    return emotions[cur] + acc
    },0)

  // Make a chartist.js data object with emotion percentages
  const data = Object.keys(emotions).reduce((acc, cur) => {
    acc.labels.push(cur)
    acc.series.push(emotions[cur] / sum * 100)
    return acc
  }, {
    labels: [],
    series: []
  })

  return (
    <div className="large-card-main">
    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
            <h2 className="mdl-card__title">
                { title }
            </h2>
        </div>
        <div className="mdl-card__supporting-text">
        <ChartistGraph
          data={ data }
          type="Pie"
          options={{
            height: "300px",
            width: "300px"
          }}
          />
          </div>
      </div>
      <style jsx>{`

      `}</style>
    </div>
  )
}