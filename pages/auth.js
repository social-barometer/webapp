import Layout from '../components/Layout'
import FacebookLogin from '../components/FacebookLogin'
import TwitterLogin from '../components/TwitterLogin'

const auth = (props) => (
  <Layout>
    <TwitterLogin />
    <FacebookLogin />
  </Layout>
)

export default auth