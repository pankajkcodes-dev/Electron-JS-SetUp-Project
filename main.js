const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 400,
    resizable: true,
  });
  win.loadFile("src/index.html");
}
