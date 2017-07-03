import io from 'socket.io-client';
import {messageTypes, rpi_uri} from '../../../common/config';

const ws_uri = 'ws://' + rpi_uri;

console.log(ws_uri);

const socket = io(ws_uri);

console.log(socket);

const init = (store) => {
  console.log(socket);

  window.socket = socket;


  socket.on('connect', function() {

    window.led_off = function() {
      const action = {
        'action': 'led_change',
        'state': 0
      }
      var payload = JSON.stringify(action);

      ws.emit('interface', payload);
    }

    window.led_on = function() {
      const action = {
        'action': 'led_change',
        'state': 1
      }
      var payload = JSON.stringify(action);

      ws.emit('interface', payload);
    }

  });

}

const emit = (type, payload) => socket.emit(type, payload);

export {
  init,
  emit
}

//
//
// var HOST = 'ws://localhost:1337' || location.origin.replace(/^http/, 'ws');
// var ws = new WebSocket(HOST);
// var $led_status = [].map.call( document.querySelectorAll('.js-led-status'), ($input) => $input );
//
// $led_status.map(($input) => {
//
//   $input.addEventListener('change', function led_status_change() {
//
//     var $checked_input,
//         action ;
//
//     $led_status.map(($input) => {
//       if ( $input.checked ) $checked_input = $input.value;
//     });
//
//     if ( $checked_input === 'on' ) {
//       action = {
//         'action': 'led_change',
//         'state': 1
//       }
//     } else {
//       action = {
//         'action': 'led_change',
//         'state': 0
//       }
//     }
//
//     var payload = JSON.stringify(action);
//     console.log(payload);
//     ws.send(JSON.stringify(payload));
//
//   });
