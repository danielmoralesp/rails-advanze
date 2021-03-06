// test file
const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')

const provider = ganache.provider()
const web3 = new Web3(provider)

const { interface, bytecode } = require('../ethereum/compile')

let accounts
let contrato

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()

  contrato = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ from: accounts[0], gas: '1000000' })

  contrato.setProvider(provider)
})

describe('Contrato', () => {
  it('deploys a contract', () => {
    assert.ok(contrato.options.address)
  })

  it('has a default message', async () => {
    const message = await contrato.methods.message().call()
    assert.equal(message, 'Hi there!')
  })

  it('can change the message', async () => {
    await contrato.methods.setMessage('bye').send({ from: accounts[0] })
    const message = await contrato.methods.message().call()
    assert.equal(message, 'bye')
  })
})
