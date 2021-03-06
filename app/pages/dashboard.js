import React, { Component } from 'react'
import getTwitterAnalysis from '../lib/getTwitterAnalysis'
import getCrime from '../lib/getCrime'
import getDashboardInfo from '../lib/getDashboardInfo'
import Layout from '../components/Layout'
import TweetEmotionPie from '../components/TweetEmotionPie'
import TweetEmotionGraph from '../components/TweetEmotionGraph'
import CrimeMap from '../components/CrimeMap'
import Forecast from '../components/Forecast'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import ChartistGraph from '../components/ChartistGraph'
import Loader from '../components/Loader'


class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      twitterAnalysis: [],
      crime: null,
      sentimentScore: null,
      mounted: false,
      loaded: false,
      info: null,
    }
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData(did) {
    const info = await getDashboardInfo(did)
    await this.setState({ info })
    const [crime, twitterAnalysis] = await Promise.all([
      getCrime({ lat: info.location.lat, lng: info.location.lng }),
      getTwitterAnalysis(did)
    ])
    await this.setState({ twitterAnalysis, crime, loaded: true })
    console.log('state chaned', this.state)
  }

  async componentWillReceiveProps(nextProps) {
    if (this.state.mounted) {
      this.setState({ loaded: false })
      await this.fetchData(nextProps.url.query.dashboard)
    }
  }

  async componentDidMount() {
    this.setState({ mounted: true })
    await this.fetchData(this.props.url.query.dashboard)
  }


  render() {
    const { twitterAnalysis, sentimentScore, crime, info } = this.state
    const { name, keywords } = this.props.url.query
    const emotion = twitterAnalysis.map(x => x.emotion)

    const loading = (
      <div>
        <Row>
          <Col>
            <Loader />
          </Col>
        </Row>
      </div>
    )
    const content = (
      <div>
      <Row>
        <Col>
        {
          twitterAnalysis.length ? (
            <div>
            <TweetEmotionPie
              title="Emotions triggered in Twitter"
              analysis={ emotion } />
            {/* <TweetEmotionGraph
                title="Emotions through time"
                analysis={ twitterAnalysis } /> */}
            </div>
          ) : ''
        }
        </Col>
      </Row>
      <Row>
        <Col>
          { info &&  <Forecast
              name={ name }
              coors={{ lat: info.location.lat, lng: info.location.lng }}
              height="300px"
              width="100%"
            /> }
        </Col>
      </Row>
      <Row>
        <Col>
          <Panel>
          { info
            ? <Panel.Heading>Crime at { info.location.address }</Panel.Heading>
            : ''
          }
          { crime
              ? (
                <div>
                    <CrimeMap center={ crime.center } crimes={ crime.crimes } />
                    <div className="gutter"></div>
                    <ChartistGraph
                      data={ crime.categories }
                      options={{
                        distributedSeries: true,
                      }}
                      type="Bar"
                      options={{
                        height: "450px",
                      }}
                      />
                  </div>
                )
              : ''
          }
          </Panel>
        </Col>
      </Row>
      </div>
    )

    return (
      <Layout>
        <Grid>
          <Row>
            <Col>
              <h3>{ name }</h3>
              <p>Keywords: { keywords }</p>
            </Col>
          </Row>
          { this.state.loaded
              ? content
              : loading
          }
        </Grid>
      <style jsx>{`
        .gutter {
          height: 15px;
        }
      `}</style>

      </Layout>
    )
  }
}

export default Dashboard