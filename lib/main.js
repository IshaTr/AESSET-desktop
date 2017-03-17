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
const path = require('path');

// start by prompting the user for a file to open when the application is ready
const dialog = electron.dialog;

// requiring fs module for file syncing
const fs = require('fs');

// adding the ready function
// listen for the ready event and pass an arrow function that does some logging.
app.on('ready', () => {
    console.log('app is ready');

    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadURL('file://' + path.join(__dirname, 'index.html'));

    mainWindow.openDevTools();
    
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
