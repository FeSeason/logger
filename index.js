const chalk = require('chalk')
const prefix = '  LOG:'

exports.default = function dft(message) {
  let msg

  if (message) {
    msg = prefix + message
  } else {
    msg = '\n'
  }
  console.log(msg) // eslint-disable-line
}

exports.warn = function warn(message) {
  console.log(chalk.yellow(prefix), message) // eslint-disable-line
}

exports.log = function log(message) {
  console.log(chalk.white(prefix), message) // eslint-disable-line
}

exports.fatal = function fatal(message) {
  if (message instanceof Error) {
    message = message.message.trim()
  }

  console.error(chalk.red(prefix), message) // eslint-disable-line
  process.exit(1)
}

exports.success = function success(message) {
  console.log(chalk.green(prefix), message) // eslint-disable-line
}

exports.error = function error(message) {
  if (message instanceof Error) {
    message = message.message.trim()
  }

  console.error(chalk.red(prefix), message) // eslint-disable-line
}