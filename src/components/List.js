import React from 'react'
import Item from './Item'

const List = ({ list }) => {
  return (
    <div>
      {list.map((entity) => {
        return <Item item={entity} key = {entity} />
      } )}
    </div>
  )
}

export default List
