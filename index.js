const connectButton = document.getElementById("connectButton");
const disconnectButton = document.getElementById("disconnectButton");
const colourPicker = document.getElementById("colourPicker");
const colourButton = document.getElementById("colourButton");

const connect = document.getElementById("connect");
const deviceHeartbeat = document.getElementById("deviceHeartbeat");
const deviceButtonPressed = document.getElementById("deviceButtonPressed");

let device;
connectButton.onclick = async () => {
  device = await navigator.usb.requestDevice({
    filters: [{ vendorId: 0x1A86 }]
  });

  await device.open();
  await device.selectConfiguration(1);
  await device.claimInterface(0);

  connected.style.display = "block";
  connectButton.style.display = "none";
  disconnectButton.style.display = "initial";
  listen();
};





disconnectButton.onclick = async () => {
  await device.close();

  connected.style.display = "none";
  connectButton.style.display = "initial";
  disconnectButton.style.display = "none";
};
