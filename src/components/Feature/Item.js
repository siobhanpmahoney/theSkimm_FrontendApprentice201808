import React from 'react'

// Renders item passed from the List component
const Item = ({ item }) => {
  return (
    <div className="tile-item">
      {item}
    </div>
  )
}

export default Item
