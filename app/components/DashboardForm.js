import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import firebase, { auth } from '../fire'
import Router from 'next/router'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button,
} from 'react-bootstrap'


const TextField = ({ label, name, value, placeholder, validationState, handleChange }) => (
  <FormGroup
    controlId="formBasicText"
    validationState={ validationState }
  >
    <ControlLabel>{ label }</ControlLabel>
    <FormControl
      name={ name }
      type="text"
      value={ value }
      placeholder={ placeholder }
      onChange={ handleChange }
    />
  </FormGroup>
)

class DashboardForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name:     { value: '', validationState: null, required: true },
      keywords: { value: '', validationState: null, required: true },
      location: { value: '', validationState: null, required: true },
      user: null,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => user && this.setState({ user }))
  }

  handleChange(event) {
    const { name, value } = event.target
    const oldFieldState = this.state[name]
    const validationState = oldFieldState.required
      ? value.length
        ? 'success'
        : 'warning'
      : null
    const newFieldState = {
      ...oldFieldState,
      value,
      validationState,
      touched: true,
    }
    this.setState({
      [name]: newFieldState
    })
  }

  handleLocationChange(address) {
    const oldLocation = this.state.location
    this.setState({
      location: {
        ...oldLocation,
        value: address,
        validationState: address ? 'success' : 'warning',
      }
    })
  }

  async makeGeocodeObject(location) {
    const geocodeArr = await geocodeByAddress(this.state.location.value)
    const geocode = geocodeArr[0]
    return {
      address: geocode.formatted_address,
      lat: geocode.geometry.location.lat(),
      lng: geocode.geometry.location.lng()
    }
  }

  async handleSubmit(event) {
    event.preventDefault()
    const { name, keywords, location, user} = this.state
    const geocode = await this.makeGeocodeObject(location)
    const allGood = ![name, keywords]
      .filter(f => f.required && f.validationState !== 'success')
      .length

    const dashboardsRef = firebase.database().ref('dashboards')
    const item = {
      name: name.value,
      keywords: keywords.value,
      location: {
        name: location.value,
        ...geocode,
      },
      user: user.uid,
      twitter: {
        token: localStorage.getItem('twitterToken'),
        secret: localStorage.getItem('twitterSecret')
      }
    }
    const result = await dashboardsRef.push(item)

    Router.push(
      `/dashboard?name=${name.value}&keywords=${keywords.value}&dashboard=${result.key}`,
    )
  }

  render() {

    const placesProps = {
      value: this.state.location.value,
      onChange: this.handleLocationChange
    }

    return (
      <form
        onSubmit={ this.handleSubmit }
        >
        <TextField
          name="name"
          value={ this.state.name.value }
          placeholder="Enter name for the dashboard"
          validationState={ this.state.name.validationState }
          handleChange={ this.handleChange }
          label="Name for the dashboard"
        />
        <TextField
          name="keywords"
          value={ this.state.keywords.value }
          placeholder="Enter keywords for the dashboard"
          validationState={ this.state.keywords.validationState }
          handleChange={ this.handleChange }
          label="Keywords for the dashboard"
            />
        <label>Location for the dashboard</label>
        <PlacesAutocomplete
          inputProps={ placesProps }
          classNames={{
            root: 'form-group',
            input: 'form-control',
            autocompleteContainer: 'panel'
          }}
          />
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}

export default DashboardForm
