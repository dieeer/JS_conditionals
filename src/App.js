import './App.css';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {name: "Milk", isPurchased: false},
    {name: "Cheese", isPurchased: true},
    {name: "Beans", isPurchased: false},
  ])
  const [newItemName, setNewItemName] = useState("Test")

  const handleItemNameChange = (e) => {
    // get what's there at the moment
    // update newItem to reflect the above
    console.log(e.target.value)
  }

  const purchaseItem = (index) => {
    const copyItems = [...items]
    const updatedItem = {...copyItems[index]}
    updatedItem.isPurchased = true
    copyItems[index] = updatedItem
    setItems(copyItems)
  }

  const addNewItemToList = (e) => {
    e.preventDefault()
    console.log('submit has happened')
    // copy exisiting list, 
    const copyItems = [...items]
    // add new item to copy and 
    copyItems.push({name: newItemName, isPurchased: false})
    // call setItems to push changes to existing
    setItems(copyItems)
  }

  const listItems = items.map((item, index) => {
    return(
      <li key={index} className={item.isPurchased ? "purchased" : "not-purchased" } >
        <span>
          {item.name}
        </span>
        {/* <span>{item.isPurchased.toString()}</span> */}
        {item.isPurchased ? <span>🛒</span> : <button onClick={() => purchaseItem(index)}> ➕ 🛒</button>}
      </li>
    )
  })


  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <ul>
        {listItems}
      </ul>

      <form onSubmit={addNewItemToList}>
        <label htmlFor="new-item-name">Add a new item:</label>
        <input type="text" id="new-item-name" value={newItemName} onChange={handleItemNameChange}/>
        <input type="submit" value="Add new item"  />
      </form>

    </div>
  );
}

export default App;