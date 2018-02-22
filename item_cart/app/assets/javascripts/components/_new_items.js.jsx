//app/assets/javascripts/components/_new_item.js.jsx

const NewItem = () => {
  return (
    <div>
      <h1>New Item</h1>
      <input ref="name" placeholder="Enter the name of the item" />
      <input ref="description" placeholder="Enter a description" />

      <button>Sumbit</button>
    </div>
  )
}
