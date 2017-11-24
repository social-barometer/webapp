import Layout from '../components/Layout'
import Card from '../components/Card'
import fetch from 'isomorphic-unfetch'

const Example = (props) => (
  <Layout>
    <h2>Example page</h2>
    <h3>Nice dog:</h3>
    <img src={props.dog} alt="nice dog"/>
    <Card title="Nice card" text="isnt it" />
  </Layout>
)

Example.getInitialProps = async function() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()

  return {
    dog: data.message
  }

}

export default Example
