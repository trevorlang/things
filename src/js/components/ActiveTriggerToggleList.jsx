import React from 'react'
import { connect } from 'react-redux'
import { toggle_led } from '../actions'
import TriggerToggleList from './TriggerToggleList'

const mapStateToProps = state => {
  return {
    triggers: state.triggers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    on_trigger_toggle: id => {
      dispatch(toggle_led(id))
    }
  }
}

const ActiveTriggerToggleList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TriggerToggleList)

export default ActiveTriggerToggleList
