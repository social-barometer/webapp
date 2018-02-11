import ChartistGraph from './ChartistGraph'
import { Panel } from 'react-bootstrap'

const TweetEmotionPie = ({ title, analysis }) => {

  // Aggregate results
  const emotions = analysis.reduce((acc, cur) => {
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
    <div>
      <Panel>
        <Panel.Heading>{ title }</Panel.Heading>
        <Panel.Body>
          <div className="twitter-pie">
            <ChartistGraph
              data={ data }
              type="Pie"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem !important'
              }}
              options={{
                height: "300px",
                width: "300px"
              }}
              />
            </div>
        </Panel.Body>
      </Panel>
      <style jsx>{`

      `}</style>
    </div>
  )
}

export default TweetEmotionPie