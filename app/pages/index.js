import Link from 'next/link'
import { Grid, Jumbotron } from 'react-bootstrap'
import Layout from '../components/Layout'

// Straight away require/import scss/css just like in react.
import indexStyle from '../styles/index.scss'


const Index = () => (
    <Layout>
        <Grid>
            <Jumbotron>
                <h1>Welcome to Social Barometer!</h1>
                <p>All your event tracking in one place.</p>
            </Jumbotron>
        </Grid>
    </Layout>
)
export default Index
