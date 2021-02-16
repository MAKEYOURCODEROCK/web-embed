const{app, BrowserWindow} = require('electron');


const path = require('path');
const url = require('url');
let win

function createWindow(){
    win = new BrowserWindow({width:800, height:600, icon: __dirname + 'img/text.ico'})
    win.removeMenu();
    win.loadURL(url.format({
        pathname:path.join(__dirname, 'main.html'),
        protocol: 'file',
        slashes:true
    }))

    win.on('closed', () => {
        win = null
    })

    win.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () =>{
    if(win == null){
        createWindow()
    }
})



//open new window


function openWindow() {
  const remote = require('electron').remote;
  const BrowserWindow = remote.BrowserWindow;
  const win = new BrowserWindow({
    height: 600,
    width: 800
  });

  win.loadURL('<url>');
}
