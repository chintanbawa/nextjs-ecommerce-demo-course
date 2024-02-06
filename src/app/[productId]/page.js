'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState()

    const getProductDetails = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${params.productId}`)
            setProduct(await res.json())
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductDetails()
    }, [])


    if (!product) return <p className='text-center'>Loading...</p>

    return (
        <div className='flex flex-col gap-4 max-w-lg m-auto p-5'>
            <Image
                src={product.image}
                alt={product.title}
                width={1000}
                height={1000}
                className='width-100 h-[300px] object-contain bg-white p-3 shadow-md rounded-md'
            />
            <div className='flex flex-col p-2 gap-2'>
                <strong className='text-primary'>{product.title}</strong>
                <span className='text-secondary'>{product.description}</span>
                <span className='text-primary'>USD {product.price}</span>
            </div>

            <button className='bg-secondary-1 w-full text-inverted rounded-md p-2 shadow-md hover:bg-secondary-2 hover:scale-105 hover:shadow-lg'>Add To Wishlist</button>

            <button className='bg-inverted w-full text-primary rounded-md p-2 shadow-md hover:bg-secondary-2 hover:text-inverted hover:scale-105 hover:shadow-lg'>Add To Cart</button>
        </div>
    )
}

export default ProductDetails
