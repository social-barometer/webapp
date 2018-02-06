import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'

class EventForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      keywords: '',
      location: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        >
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text" name="keywords" id="keywords" />
          <label className="mdl-textfield__label" htmlFor="keywords">Keywords (separate with comma):</label>
        </div>
        <div className="mdl-textfield mdl-js-textfield">
        <input className="mdl-textfield__input" type="text" name="location" id="location" />
        <label className="mdl-textfield__label" htmlFor="location">Co-ordinates for location:</label>
        </div>
        <div>
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

export default EventForm