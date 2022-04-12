import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Cart_With_shop() {
    
    const [shops, setShops] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("/api/getcart");
        if(response.data.StatusCode == 200){
            setShops(response.data.data)
        }
    }

    useEffect(() => {
        fetchData();

    }, [])
    
  return (
    <>
        Cart with shops

        <Flex justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
        {
        //   products.length > 0 ? products.map((value, index) => (
        //     <Box key={index}>
        //       <Link href={`/product/${value.shop_id}/${value._id}`}>
        //         <Product 
        //           name={value.name} 
        //           imageURL={value.image ? process.env.PUBLIC_URL + `/upload/images/${value.image.imgId}` : ""} 
        //           price={value.price} 
        //           description={value.description}
        //         />
        //       </Link>
        //     </Box>
        //   ))
        //     : <h3>No products found</h3>
        }


      </Flex>
    </>
  )
}
