import React from 'react'
import Item from './Item'


//maps over array of items and passes each item to the Item component, which will render it to screen. 
const List = ({ list }) => {
  return (

    <div className='list'>

      {list.map((entity) => {
        return <Item item={entity} key = {entity} />
      })}

    </div>
  )
}

export default List
