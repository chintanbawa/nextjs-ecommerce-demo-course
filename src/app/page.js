'use client'
import React, { useEffect, useState } from 'react'
import ProductItem from './components/ProductItem'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])


  const getProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      setProducts(await res.json())
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 20,
      margin: 20
    }}>{
        products.map(product => <ProductItem product={product} />)
      }</div>
  )
}

export default Products