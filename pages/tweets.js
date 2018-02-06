import fetch from 'isomorphic-unfetch'
import Layout  from '../components/Layout'
import TweetEmotionPie from '../components/TweetEmotionPie'

const tweets = (props) => (
  <Layout>
    <TweetEmotionPie title="Puppies" tweets={props.tweets} />
  </Layout>
)

tweets.getInitialProps = async () => {
  // These props will be fetched from the database but for now they're hardcoded.
  const keywords = 'Puppies'
  const user = 1121221
  const scraperURL = 'http://localhost:3001'

  const resp = await fetch(`${scraperURL}/?keywords=${keywords}&user=${user}`)
  const posts = await resp.json()

  return {
    tweets: posts
  }

}

export default tweets