export const toggle_led = id => {
  return {
    type: 'TOGGLE_LED',
    id
  }
}

export const connect_led = id => {
  return {
    type: 'CONNECT_LED',
    id
  }
}
