import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import EventForm from '../components/EventForm'

const eventFormPage = (props) => (
  <Layout>
    <EventForm />
  </Layout>
)

export default eventFormPage