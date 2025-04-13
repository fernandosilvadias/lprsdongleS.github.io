const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const colourPicker = document.getElementById("colourPicker");
const colourButton = document.getElementById("colourButton");

const connect = document.getElementById("connect");
const deviceHeartbeat = document.getElementById("deviceHeartbeat");
const deviceButtonPressed = document.getElementById("deviceButtonPressed");

let device;
connectButton.onclick = async () => {
  device = navigator.usb.requestDevice({ filters: [{ vendorId: 0x1A86 }] })
.then(device => {
  console.log(device.productName);      // "Arduino Micro"
  console.log(device.manufacturerName); // "Arduino LLC"
})
.catch(error => { console.error(error); });




  
  





disconnectButton.onclick = async () => {
  await device.close();

  connected.style.display = "none";
  connectButton.style.display = "initial";
  disconnectButton.style.display = "none";
};
