# AESSET-desktop
Desktop application for AESSET

First we will install `Yarn`. To install Yarn [click here](https://yarnpkg.com/en/docs/install).

#### To setup

```
git clone git@github.com:IshaTr/AESSET-desktop.git
cd AESSET-desktop
sudo yarn
``` 

#### To run

```
$yarn run script
# Open another tab of terminal
$yarn start
```

#### Note:
If you are getting an error like `error: ENOENT: no such file or directory, open 'AESSET-desktop/node_modules/electron/path.txt'` then, go to `/node_modules/electron/path.txt` and run `node install.js`