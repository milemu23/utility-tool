// The Debugger

// Use Colors Package
const colors = require('colors');

// console.log(colors.green(message));
function debug(title, info, status) {
  if (process.env.DEBUG === 'true') {
  // added a separator
    const sep = '\n*********DEBUG*********\n';
    const out = sep + title + sep;
    const date = new Date();
    const timestamp = '[' + date.toISOString() + '] ';

    if (status === 'success') {
      console.log(colors.green(out, 'Success', info, timestamp));
    } else if (status === 'error') {
      console.log(colors.red(out, 'Error', info, timestamp));
    }


  }
}

exports.debug = debug;
