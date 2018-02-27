// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import web3 from '../../../ethereum/web3'
import contrato from '../../../ethereum/contrato'

class Hello extends React.Component {
  constructor() {
    super()

    this.state = {
      // title para verificar que funciona react
      title: 'Hola mundo desde estado inicial',
      // message para dejarlo como predeterminado vacio
      message: '',
      // es el newMessage del metodo setter
      newMessage: ''
    }
  }

  // hacemos este llamado despues de montar el componente con un .call() al metodo message()
  // del contrato
  async componentDidMount() {
    const message = await contrato.methods.message().call()

    this.setState({ message })
  }

  // metodo del submoit
  onSubmit = async event => {
    event.preventDefault()

    const accounts = await web3.eth.getAccounts()

    // al settear el metodo setMessage, debemos pasarle una propiedad/argumento
    // y hacer el send desde la cuenta. En este caso no necesita un value u otro param
    await contrato.methods.setMessage(this.state.newMessage).send({
      from: accounts[0]
    })
  }

  render() {
    // solo para validar que se conecta a web3
    const ether = web3.utils.fromWei('1000000', 'ether')

    return (
      <div>
        {/* solo para probar que funciona react */}
        <h1>{this.state.title}</h1>

        {/* solo para probar que funciona web3 */}
        <h4>{ether}</h4>

        {/* mensaje actual desde el contrato y el modificado */}
        <p>This contract message is {this.state.message}</p>

        {/* Ojo con el onSubmit, siempre llamando a este metodo.
        Esta linea es la que llama a metamask */}
        <form onSubmit={this.onSubmit}>
          <h4>Change the message</h4>
          <div>
            <label>Enter new message</label>

            {/* Aqui se settea el nuevo mensaje del contrato */}
            <input
              value={this.state.newMessage}
              onChange={event =>
                this.setState({ newMessage: event.target.value })
              }
            />
          </div>
          <button>Enter</button>
        </form>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div'))
  )
})
