import React from 'react'
import Item from './Item'

const List = ({ list }) => {
  return (
    <div>
      {list.map((element) => {
        return <Item name={element} key = {element} />
      } )}
    </div>
  )
}

export default List
