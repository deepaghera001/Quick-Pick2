import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../partials/Product'
import { Flex } from '@chakra-ui/react'
import { API } from "../../API/api_url"
export default function ShopProducts() {
    const [allProduct, setallProduct] = useState('')
    useEffect(() => {
        getProduct()
    }, []);



    const getProduct = async () => {
        console.log('hello')
        const shop = await axios.get(`${API}/api/productDetail/shop/6253f02125e5f259fc698b1b`)
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
                <Flex justifyItems={'self-start'} justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
                    {allProduct?.length > 0 && allProduct.map((val, ind) => (
                        <Product
                            id={val._id}
                            name={val.name}
                            description={val.description}
                            price={val.price}
                            stock={val.stock}
                            imgId={val.image.imgId}
                        />
                    ))}
                </Flex>
            }
        </div>
    )
}
