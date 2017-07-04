import React from 'react'

const TriggerToggleList = ({ triggers, on_trigger_toggle }) => (
  <div>
    {
      triggers.map((trigger) => (
        <div>
          <label for="led-status-on">LED:</label>
          <input className="js-led-status" type="checkbox" name="led_status" id="led-status-on" onChange={() => on_trigger_toggle(trigger.id)} selected={trigger.state}/>
        </div>
      ))
    }
   </div>
)

export default TriggerToggleList
