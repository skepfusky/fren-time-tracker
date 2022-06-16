const path = require("path")
const { app, BrowserWindow } = require("electron")

const isDev = process.env.IS_DEV == "true" ? true : false

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    // frame: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.ts"),
    },
  })

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  )

  // Open DevTools.
  if (isDev) mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
