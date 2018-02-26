import web3 from './web3'

const address = '0x8b480d3A382Ff11280312dcEC57136d0cd3EEC1D'

const abi = [
  {
    constant: false,
    inputs: [{ name: 'newMessage', type: 'string' }],
    name: 'setMessage',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'message',
    outputs: [{ name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'initialMessage', type: 'string' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  }
]

export default new web3.eth.Contract(abi, address)
