import iridium from 'iridium-sbd'

iridium.open({
  debug: 1, // turn debugging on
  port: '/dev/tty.usbserial', // /dev/cu.usbserial
  flowControl: false, // Set to false to disable flowControl on the SBD for 3-wire UART setups.
})

iridium.on('initialized', () => {
  console.log('Iridium initialized')
  iridium.sendMessage('Hello! This is a test. Do not send a reply.', (err, momsn) => {
    console.log('Message Sent!', momsn)
  })
})

iridium.on('ringalert', () => {
  console.log('New incoming message event!')
  iridium.mailboxCheck()
})

iridium.on('newmessage', (message, queued) => {
  console.log('Received new message ', queued, message)
})

iridium.on('debug', (log) => {
  console.log('>>> ', log)
})
// Shower on/off drips
// 
