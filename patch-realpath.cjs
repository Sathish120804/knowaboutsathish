const fs = require('fs');

if (fs && fs.realpathSync && fs.realpathSync.native) {
  try {
    fs.realpathSync.native = fs.realpathSync;
  } catch (e) {}
}

if (fs && fs.realpath && fs.realpath.native) {
  try {
    fs.realpath.native = fs.realpath;
  } catch (e) {}
}
