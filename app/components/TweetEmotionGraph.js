import ChartistGraph from './ChartistGraph'
import { Panel } from 'react-bootstrap'

// UNFINISHED!

export default ({ title, analysis }) => {

  console.log(analysis)

  return (
    <Panel>
      <Panel.Heading>{ title }</Panel.Heading>
      <Panel.Body>
        {/* <ChartistGraph
          type="Line"
        /> */}
      </Panel.Body>
    </Panel>
  )
}