const { app, BrowserWindow, Menu } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600, autoHideMenuBar: true })

  win.loadURL('https://www.idlescape.com/')


  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})


