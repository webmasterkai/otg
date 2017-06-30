import iridium from 'iridium-sbd'
// >>>  > AT+SBDWT=Winds <10. Too far W from gulfstream, finally out of reverse current/eddy. Spinnaker day. 30 16'N 79 20'W. Next update Tue or Wed.

const txtMsg = 'Wnd <7. Just getting up for the day. 36-49N 74-20W'

iridium.open({
  debug: 1, // turn debugging on
  port: '/dev/tty.usbserial', // /dev/cu.usbserial
  flowControl: false, // Set to false to disable flowControl on the SBD for 3-wire UART setups.
})

iridium.on('initialized', () => {
  console.log('Iridium initialized')
  iridium.sendMessage(txtMsg, (err, momsn) => {
    if (err) return console.error(err)
    return console.log('Message Sent!', momsn)
  })
})

iridium.on('ringalert', () => {
  console.log('New incoming message event!')
  iridium.mailboxCheck(console.log)
})

iridium.on('newmessage', (message, queued) => {
  console.log('Received new message ', queued, message)
})

iridium.on('debug', (log) => {
  console.log('>>> ', log)
})
