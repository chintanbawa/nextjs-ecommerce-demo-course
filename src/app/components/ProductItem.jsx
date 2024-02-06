import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductItem = ({product}) => {
  const router = useRouter()
  return (
    <div key={product.id} className='bg-inverted rounded-md shadow-lg cursor-pointer hover:shadow-xl' onClick={()=> router.push(`${product.id}`)}>
        <Image
        src={product.image}
        alt={product.title}
        width={1000}
        height={1000}
        className='width-100 aspect-square object-contain bg-white p-3'
        />

        <div className='flex flex-col p-2 gap-1'> 
            <strong className='text-primary line-clamp-1'>{product.title}</strong>
            <span className='text-secondary line-clamp-2'>{product.description}</span>
            <span className='text-primary line-clamp-1'>{product.price}</span>
        </div>
    </div>
  )
}

export default ProductItem