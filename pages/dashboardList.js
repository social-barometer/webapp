import React, { Component } from 'react'
import firebase, { auth } from '../firebase'
import getDashboards from '../lib/getDashboards'

import Link from 'next/link'
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
            <ul>
            { dashboards && dashboards.map((d, i) =>(
              <li key={i}>
              <Link
                as={`/dashboard/${d.name}`}
                href={`/dashboard?name=${d.name}&keywords=${d.keywords}&dashboard=${d.id}`}
                >
                <a>{ d.name }</a>
              </Link>
              </li>
            ))}
            </ul>
          </Layout>
      </div>
    )
  }
}

export default Dashboard