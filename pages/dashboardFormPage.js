import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import DashboardForm from '../components/DashboardForm'

const dashboardFormPage = (props) => (
  <Layout>
    <DashboardForm />
  </Layout>
)

export default dashboardFormPage