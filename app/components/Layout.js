import React, { Component } from 'react'
import Theme from './Theme'
import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import NavItem from './NavItem'
import LoginButton from './LoginButton'
import firebase, { auth, provider } from '../fire'
import getDashboards from '../lib/getDashboards'
import secrets from '../secrets.json'
import Router from 'next/router'

const DashboardDropdown = ({ dashboards }) => (
  <NavDropdown title="Dashboards" id="dashboard-dropdown">
    { dashboards.map((d,i) => (
      <li key={i}>
        <Link href={`/dashboard?name=${d.name}&keywords=${d.keywords}&dashboard=${d.id}`}>
          <a>{ d.name }</a>
        </Link>
      </li>
    ))}
    <MenuItem divider />
    <li key={dashboards.length + 1}>
      <Link href="/createDashboard">
        <a>Create a new dashboard</a>
      </Link>
    </li>
  </NavDropdown>
)

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: null,
      dashboards: null,
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  async login () {
    try {
        const result = await auth.signInWithPopup(provider)
        const user = result.user
        this.setState({ user })
        localStorage.setItem('twitterToken', result.credential.accessToken)
        localStorage.setItem('twitterSecret', result.credential.secret)
        console.log(`Welcome ${user.displayName}!`)
    } catch(e) {
        throw new Error(e)
    }
  }

  async logout() {
      try {
          await auth.signOut
          this.setState({ user: null })
          localStorage.removeItem('twitterToken')
          localStorage.removeItem('twitterSecret')
          Router.push({
              pathname: '/'
            })
      } catch(e) {
          throw new Error(e)
      }
  }

  async componentDidMount() {
      auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dashboards = await getDashboards(user.uid)
        this.setState({ user, dashboards })
      }
    })
  }

  render() {

    const { user, dashboards } = this.state

    return (
      <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css" />
        <link rel="stylesheet" href="/static/main.css" />
        <link rel="stylesheet" href="/static/loaders.css" />
        <script
          type="text/javascript"
          src={`https://maps.googleapis.com/maps/api/js?key=${secrets.googleMapsAPIKey}&libraries=places`}>
        </script>
      </Head>
        <Theme>
        <div>
        <Navbar>
          <Navbar.Header>
            <Link href="/"><a className="navbar-brand">Social Barometer</a></Link>
          </Navbar.Header>
          <Nav>
          { user
            ? dashboards
              ? <DashboardDropdown dashboards={ dashboards } />
              : <NavItem href="/createDashboard">Create a new dashboard</NavItem>
            : ''
          }
          </Nav>
            <Nav pullRight>
              <LoginButton
                user={ user }
                login={ this.login }
                logout={ this.logout }
                />
            </Nav>
        </Navbar>
        { this.props.children }
        </div>
      </Theme>
      <style jsx global>{`

      `}</style>
      </div>
    )
  }
}

export default Layout
