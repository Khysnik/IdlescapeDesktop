const { app, BrowserWindow, Menu } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 })

  win.loadURL('https://www.idlescape.com/')
setMainMenu();

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
function setMainMenu() {
  const template = [
    {
		
      label: 'Userscripts',
      submenu: [
		{
          label: 'Chat 0 by D4M4G3X',
          click() {
              win.webContents.executeJavaScript(" fetch('https://raw.githubusercontent.com/Pangea7533/IdlescapeDesktop/main/Chat0.js').then((response) => response.text()).then((text) => {eval(text);});")
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}


