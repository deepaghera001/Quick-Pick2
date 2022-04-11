import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product'
import { Flex } from '@chakra-ui/react'

export default function ShopProducts() {
    const [allProduct, setallProduct] = useState('')
    useEffect(() => {
        getProduct()
    }, []);



    const getProduct = async () => {
        const shop = await axios.get('http://localhost:5000/api/productDetail/shop')
        setallProduct(shop.data.userdata)
        console.log(shop.data.userdata)
    }
    return (
        <div>
            ShopProducts
            {/* {allProduct} */}
            {/* {allProduct.map((val) => console.log('hello'))} */}
            {/* <Products allProduct={allProduct} /> */}
            {
                <Flex>
                    {allProduct?.length > 0 && allProduct.map((val, ind) => (
                        <Product
                            id={val._id}
                            name={val.name}
                            description={val.description}
                            price={val.price}
                            stock={val.stock}
                        // image={val.image}
                        />
                    ))}
                </Flex>
            }
        </div>
    )
}
