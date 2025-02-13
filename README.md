# Hacker's Terminal

This project is a simple **hacker's terminal simulation** using **HTML, CSS, and JavaScript**. It displays a fake hacking process with random delays and finally shows a success message.

## 🚀 Features
- **Randomized Delays:** Each step takes a random time to simulate real hacking.
- **Dynamic Content:** The text updates dynamically on the screen.
- **Smooth Execution:** Uses `async` and `await` for better timing control.

## 📂 Project Structure
```
📁 hackers-terminal
├── index.html
├── style.css
├── script.js
├── README.md
```

## 🛠️ How It Works
1. The script executes a series of **fake hacking steps**, each with a random delay.
2. Steps include:
   - Initializing Hacking
   - Reading Files
   - Detecting Passwords
   - Sending Data to Server
   - Cleaning Up
   - Displaying "Hacking Successful!"
3. The delays make the hacking process look more realistic.

## 🔧 Setup & Usage
1. **Download** or **clone** the repository.
2. Open `index.html` in any browser.
3. Enjoy the hacking simulation! 😎

## 📜 Code Explanation
```js
let screen = document.getElementById("screen");
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function ini() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Initializing Hacking ...`;
  console.log("ini");
}
async function read() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Reading your Files ...`;
  console.log("read");
}
async function pass() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Password files Detected ...`;
  console.log("pass");
}
async function send() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Sending all passwords and personal files to server ...`;
  console.log("send");
}
async function clean() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Cleaning up ...`;
  console.log("clean");
}
async function successful() {
  await delay(Math.floor(Math.random() * 7000));
  screen.innerHTML = `Hacking Successful!`;
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

hacking();
```

## 🎨 Future Enhancements
- **Better UI:** Adding animations or hacker-style text effects.
- **Sound Effects:** Beep sounds during the hacking process.
- **More Steps:** Fake password cracking, database breach, etc.

## 📜 License
This project is for **fun and educational purposes only.** 🕶️

---
Made with ❤️ by **Abhishek** 🚀

