import React from 'react';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <label for="led-status-on">LED:</label>
      <input className="js-led-status" type="radio" name="led_status" id="led-status-on" value="on" /> On
        <input className="js-led-status" type="radio" name="led_status" id="led-status-off" value="off" /> Off
      </div>);
  }
}
