// app/assets/javascripts/components/_all_items.js.jsx

class AllItems extends React.Component {
  constructor() {
    super()

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    $.getJSON('/api/v1/items.json', response => {
      this.setState({ items: response })
    })
  }

  render() {
    const items = this.state.items.map(item => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      )
    })

    return <div>{items}</div>
  }
}
