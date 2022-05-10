import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from '../../API/api_url'
import OrderProducts_ShopCard from './OrderProducts_ShopCard';



export default function ShopOrder() {

    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        fetchData();
    }, [orderDetail])

    const fetchData = async () => {
        console.log('inside order....')
        const orders = await axios.get(`${API}/api/shopOrders`);
        console.log(orders.data.userdata)
        setOrderDetail(orders.data.userdata)
    }


    return (

        <>
            <Heading mt={'20px'} isTruncated>
                <Center>
                    Order Details
                </Center>
            </Heading>
            {
                orderDetail.length > 0 ? orderDetail.map((val, ind) => (
                    <OrderProducts_ShopCard
                        orderId={val._id}
                        index={ind}
                        amount={val.amount}
                        pickup_time={val.pickup_time}
                        product_details={val.product_details}
                        secure_code={val.secure_code}
                        order_status={val.order_status}
                    />
                )) : 'No order'
            }
        </>
    )
}
