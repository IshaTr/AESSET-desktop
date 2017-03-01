// requiring electron library
const electron = require('electron');
// The app module has a number of life-cycle events. Here are a few examples:

// ready
// quit
// before-quit
// will-quit
// window-all-closed
const app = electron.app;


// creating main window for the garbage collection as soom as the function is done executing
let mainWindow = null;

// creating User window
const BrowserWindow = electron.BrowserWindow;

// requiring a path for the window to load content from
const path = electron.path;

// start by prompting the user for a file to open when the application is ready
const dialog = electron.dialog;

// requiring fs module for file syncing
const fs = require('fs');

// adding the ready function
// listen for the ready event and pass an arrow function that does some logging.
app.on('ready', ()=>{
    console.log('app is ready');

    mainWindow = new.BrowserWindow();

    mainWindow.loadURL('file://'+path.join(./lib,'index.html'));

    // This event fires once the browser Window's DOM is loaded
    mainWindow.webContent.on('did-finish-load', =>{
        openFile();
    });

    mainWindow.on('closed', =>{
        mainWindow = null;
    });
});

function openFile(){
    const files = dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'];
        //filterig the file type
        filters : [
            {name: 'Markdown files', extension: ['markdown', 'txt', 'md']}
        ];
    });

    if (!files) return;

    const file = files[0];
    //contents of the file
    const content = fs.readFileSync(file).toString()

    mainWindow.webContents.send('file-opened', file, content);
};





