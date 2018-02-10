import React, { Component } from 'react'
import getTweets from '../lib/getTweets'
import Layout from '../components/Layout'
import TweetEmotionPie from '../components/TweetEmotionPie'

class Dashboard extends Component {

  constructor(props) {
    console.log('Props:', props)
    super(props)
    this.state = {
      tweets: null,
      sentimentScore: null
    }
  }

  getSentimentScore(tweets) {
    const sentiments = tweets
      .map(p => p.sentiment)
      .filter(p => p)
  
    const totalSentiment = sentiments
      .reduce((acc, cur) => acc + cur)

    return (totalSentiment / sentiments.length).toFixed(2)
  }

  async fetchData() {
    const tweets = await getTweets(this.props.url.query.dashboard)
    console.log('Got dem tweets:', tweets)
    this.setState({
      tweets: tweets,
      sentimentScore: this.getSentimentScore(tweets)
    })
  }

  async componentDidMount() {
    this.fetchData()
  }

  async getInitialProps() {
    this.fetchData()
  }

  render() {
    const { tweets, sentimentScore } = this.state
    const { name, keywords } = this.props.url.query
    console.log('name:', name)
    return (
      <Layout>
        {/* <h3>{ name }</h3>
        <p>Keywords: { keywords }</p> */}
        {
          tweets && (
            <TweetEmotionPie title="Emotions triggered" tweets={ tweets } />
          )
        }
      </Layout>
    )
  }
}

export default Dashboard