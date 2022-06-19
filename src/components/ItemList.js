import React from 'react'
import Item from './Item'

function ItemList({ items }) {
  return (
    <div>
      {/* {items.map(()=>{   // Se puede hacer cualquiera de las dos formas
            return <h2>Hola</h2>
        })} */}


      {
        items.map((item) => (
          <Item key={item.id} item={item} />
        ))
      }
    </div>
  )
}

export default ItemList