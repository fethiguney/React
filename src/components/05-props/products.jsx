
import React from 'react'
import ProductCard from "./product-card";

const Products = () => {
  return (
    <div>
       <ProductCard
                title="Sony X5 Headset"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque."
                price="$54.99"
            />
            <ProductCard
                title="Samsung S7 Headset"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, itaque."
                price="$44.99"
            />
    </div>
  )
}

export default Products