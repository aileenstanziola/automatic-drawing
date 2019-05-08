var socket = require("socket.io-client")("https://eroft-final.glitch.me")
var SerialPort = require("serialport")
var portName = "/dev/cu.usbmodem1441"; // fill in your serial port name here

var sp = new SerialPort(portName, {baudRate: 9600})



socket.on("connect", () => {
    console.log("i'm connected ! ");
     
})

sp.on("open", () => console.log("serial port opened"))

socket.on("broadcastedKeyup", keyName => {
    console.log(`broadcastedKeyup : ${keyName}`)
    let keycodeLookup = {
        Up: 1,
        Right: 2,
        Down: 3,
        Left: 4
    }
    console.log(`writing to serial : ${Buffer.from([keycodeLookup[keyName]]).inspect()}`)
    sp.write(Buffer.from([keycodeLookup[keyName]]))
    
})