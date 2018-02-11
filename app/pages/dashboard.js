import React, { Component } from 'react'
import getTwitterAnalysis from '../lib/getTwitterAnalysis'
import getCrime from '../lib/getCrime'
import getDashboardInfo from '../lib/getDashboardInfo'
import Layout from '../components/Layout'
import TweetEmotionPie from '../components/TweetEmotionPie'
import TweetEmotionGraph from '../components/TweetEmotionGraph'
import CrimeMap from '../components/CrimeMap'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import ChartistGraph from '../components/ChartistGraph'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      twitterAnalysis: [],
      crime: null,
      sentimentScore: null,
      mounted: false,
      info: null,
    }
    this.fetchData = this.fetchData.bind(this)
  }

  async fetchData(did) {
    const info = await getDashboardInfo(did)
    const [crime, twitterAnalysis] = await Promise.all([
      getCrime({ lat: info.location.lat, lng: info.location.lng }),
      getTwitterAnalysis(did)
    ])
    await this.setState({ twitterAnalysis, crime, info })
    console.log('state chaned', this.state)
  }

  async componentWillReceiveProps(nextProps) {
    if (this.state.mounted) {
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
    return (
      <Layout>
        <Grid>
          <Row>
            <Col>
              <h3>{ name }</h3>
              <p>Keywords: { keywords }</p>
            </Col>
          </Row>
          <Row>
            <Col>
            {
              twitterAnalysis.length ? (
                <div>
                <TweetEmotionPie
                  title="Emotions triggered"
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