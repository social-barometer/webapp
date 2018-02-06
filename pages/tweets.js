import fetch from 'isomorphic-unfetch'
import Layout  from '../components/Layout'
import TweetEmotionPie from '../components/TweetEmotionPie'
import Gauge from 'react-svg-gauge'

const tweets = ({ tweets, sentimentScore }) => (
  <Layout>
    <TweetEmotionPie title="Puppies" tweets={ tweets } />
    <Gauge label="Sentiment score" value={ sentimentScore } min={-1} max={1} width={400} height={320} />
  </Layout>
)

tweets.getInitialProps = async () => {
  // These props will be fetched from the database but for now they're hardcoded.
  const keywords = 'Puppies'
  const user = 1121221
  const scraperURL = 'http://localhost:3001'

  const resp = await fetch(`${scraperURL}/?keywords=${keywords}&user=${user}`)
  const posts = await resp.json()

  const sentiments = posts
    .map(p => p.sentiment)
    .filter(p => p)
  
  const totalSentiment = sentiments
    .reduce((acc, cur) => acc + cur)

  const sentimentScore = (totalSentiment / sentiments.length).toFixed(2)


  return {
    tweets: posts,
    sentimentScore: sentimentScore
  }

}

export default tweets