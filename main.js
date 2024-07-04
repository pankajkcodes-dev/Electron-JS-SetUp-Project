const { app, BrowserWindow } = require("electron");

app.whenReady().then(createWindow);

function createWindow() {
  const win = new BrowserWindow({
    width: 250,
    height: 100,
    resizable: true,
    alwaysOnTop: true, // This will make the window always on top
    webPreferences: {
      nodeIntegration: true
    },
    autoHideMenuBar: true,
  });
  win.loadFile("src/index.html");
}


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});