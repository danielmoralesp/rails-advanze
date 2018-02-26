const path = require('path')
const fs = require('fs')
const solc = require('solc')

const contratoPath = path.resolve(__dirname, 'contracts', 'Contrato.sol')
const source = fs.readFileSync(contratoPath, 'utf8')

console.log(solc.compile(source, 1))

module.exports = solc.compile(source, 1).contracts[':Contrato']
