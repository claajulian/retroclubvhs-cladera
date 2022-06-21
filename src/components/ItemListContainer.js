import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import { productos } from '../mock/products'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer(props) {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams();

  useEffect(() => {
    const traerProductos = new Promise((res, rej) => {
      setTimeout(() => {
        if (categoryId === undefined)
          res(productos)
        else {
          const itemsFound = productos.filter(moovie => {
            return moovie.category === categoryId
          })
          res(itemsFound)
        }
      }, 2000)
    })
    traerProductos.then((res) => {
      //console.log(res);
      setProducts(res);
    })
  }, [categoryId])

  console.log(products);

  return (

    <div>{props.greeting}
      <br></br>
      <ItemCount stock={5} initial={1} />
      <ItemList items={products} />

    </div>
  )
}
