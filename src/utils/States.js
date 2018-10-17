import keyMirror from 'keymirror'

export const states = keyMirror({
  WELCOME: true,
  SENDER_ADDRESS: true,
  RECEIVER_ADDRESS: true,
  SHIPPING_OPTION: true,
  CONFIRMATION: true,
  SUCCESS: true,
})
