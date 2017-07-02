const rpi_port = 1337;
const rpi_host = '192.168.1.7';

// makes an object of the form {userJoined: 'userJoined'}
const messageTypes = [
  ''
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})

module.exports = {
  rpi_port,
  rpi_host,
  messageTypes,
  rpi_uri: `${rpi_host}:${rpi_port}`
}
