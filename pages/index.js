import Layout from '../components/Layout'
import Link from 'next/link'


const Index = () => (
  <Layout>
    <Link href="/example">
      <a>Example</a>
    </Link>
    <br />
    <Link href="/test">
      <a>test</a>
    </Link>
  </Layout>
)

export default Index
