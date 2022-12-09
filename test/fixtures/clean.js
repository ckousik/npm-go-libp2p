'use strict'

const fs = require('fs/promises')
const path = require('path')
const execa = require('execa')

module.exports = async function clean () {
  await fs.rm(path.resolve(__dirname, '../../p2pd')).catch(err => {
    if (err.code !== 'ENOENT') {
      throw err
    }
  })
  await fs.rm(path.resolve(__dirname, '../../relayd')).catch(err => {
    if (err.code !== 'ENOENT') {
      throw err
    }
  })
  await execa('git', ['checkout', '--', path.resolve(__dirname, '../../bin/p2pd')])
  // await execa('git', ['checkout', '--', path.resolve(__dirname, '../../bin/relayd')])
}
