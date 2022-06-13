import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { productos } from '../mock/products'
import ItemList from './ItemList'

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])


  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos)
      }, 2000)
    })
    traerProductos.then((res) => {
      //console.log(res);
      setProducts(res);
    })
  }, [])

  console.log(products);

  return (

    <div>{props.greeting}
      <br></br>
      <ItemCount stock={5} initial={1} />
      <ItemList items={products}/>
    </div>
  )
}
