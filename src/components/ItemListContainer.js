import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer(props) {
  return (

    <div>{props.greeting}
    <br></br>
      <ItemCount stock={5} initial={1} />
    </div>
  )
}
