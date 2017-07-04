import io from 'socket.io-client'
import { messageTypes, rpi_uri } from '../../../common/config'

const ws_uri = 'ws://' + rpi_uri

const socket = io(ws_uri)

socket.on('connect', function() {

  window.led_off = function() {
    const action = {
      'action': 'led_change',
      'state': 0
    }
    var payload = JSON.stringify(action)

    ws.emit('interface', payload)
  }

  window.led_on = function() {
    const action = {
      'action': 'led_change',
      'state': 1
    }
    var payload = JSON.stringify(action)

    ws.emit('interface', payload)
  }

})

const emit = (type, payload) => socket.emit(type, payload)

export {
  emit
}
