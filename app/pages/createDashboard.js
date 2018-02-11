import Link from 'next/link'
import { Grid } from 'react-bootstrap'
import Layout from '../components/Layout'
import DashboardForm from '../components/DashboardForm'

const createDashboard = () => (
    <Layout title="Create Dashboard">
        <Grid>
            <DashboardForm />
        </Grid>
    </Layout>
)
export default createDashboard
