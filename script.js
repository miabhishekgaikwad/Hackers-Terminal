let screen = document.getElementById("screen");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ini() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Initializing Hacking <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>`;
  console.log("ini");
}
async function read() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Reading your Files <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>`;
  console.log("read");
}
async function pass() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Password files Detected <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>`;
  console.log("pass");
}
async function send() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Sending all passwords and personal files to server <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>`;
  console.log("send");
}
async function clean() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Cleaning up <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>`;
  console.log("clean");
}
async function successful() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `<div class="screen" id="screen">Hacking Successful!</div>`;
  console.log("Hacking Successful!");
}


async function hacking() {
  await ini();
  await read();
  await pass();
  await send();
  await clean();
  await successful();
}

hacking()