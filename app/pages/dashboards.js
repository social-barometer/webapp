import React, { Component } from 'react'
import firebase, { auth } from '../fire'
import getDashboards from '../lib/getDashboards'

import Link from 'next/link'
import { Grid, ListGroup } from 'react-bootstrap'
import Layout from '../components/Layout.js'
import DashboardForm from '../components/DashboardForm'


class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
      dashboards: null,
    }
  }

  async componentDidMount() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dashboards = await getDashboards(user.uid)
        this.setState({ dashboards, user })
        console.log(dashboards)
      }
    })
  }

  render() {
    const { dashboards } = this.state
    return (
      <div>
          <Layout>
            <Grid>
              <ListGroup>
              { dashboards && dashboards.map((d, i) =>(
                <Link
                  key={i}
                  as={`/dashboards/${d.name}`}
                  href={`/dashboard?name=${d.name}&keywords=${d.keywords}&dashboard=${d.id}`}
                  >
                  <a className="list-group-item">{ d.name }</a>
                </Link>
              ))}
              </ListGroup>
            </Grid>
          </Layout>
      </div>
    )
  }
}

export default Dashboard