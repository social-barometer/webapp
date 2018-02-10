import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import firebase, { auth } from '../firebase'
import Router from 'next/router'

class DashboardForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      keywords: '',
      location: '',
      user: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => user && this.setState({ user }))
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const eventsRef = firebase.database().ref('dashboards')
    const item = {
      name: this.state.name,
      keywords: this.state.keywords,
      location: this.state.location,
      user: this.state.user.uid,
      twitter: {
        token: localStorage.getItem('twitterToken'),
        secret: localStorage.getItem('twitterSecret')
      }
    }
    const result = await eventsRef.push(item)
    Router.push({
      pathname: '/dashboardList'
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        >
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" name="name" id="name" />
          <label className="mdl-textfield__label" htmlFor="name">Name:</label>
        </div>
        <br />
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" name="keywords" id="keywords" />
          <label className="mdl-textfield__label" htmlFor="keywords">Keywords (separate with comma):</label>
        </div>
        <br />
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" name="location" id="location" />
          <label className="mdl-textfield__label" htmlFor="location">Co-ordinates for location:</label>
        </div>
        <div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default DashboardForm