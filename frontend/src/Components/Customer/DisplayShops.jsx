import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../API/api_url'
import Shop_card from '../partials/Shop_card'
import { Flex } from '@chakra-ui/react';

export default function DisplayShops() {
    const [shops, setshops] = useState([]);
    useEffect(() => {
        getAllShop();
    }, []);

    const getAllShop = async () => {
        const shops = await axios.get(`${API}/api/shop_register`)
        setshops(shops.data.userdata)
        console.log('shops are: ', shops)

    }
    return (
        <>
            <Flex justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
                {shops.length > 0 ? shops.map((val, ind) => (
                    <Shop_card
                        key={ind}
                        shop_id={val._id}
                        shop_name={val.shop_name}
                        owner_name={val.owner_name}
                        address={val.address}
                        area={val.area}
                        city={val.city}
                        pincode={val.pincode}
                        start_time={val.start_time}
                        end_time={val.end_time}
                        aim='onlyshops'
                    />
                )) : "no found"}
            </Flex>
        </>
    )
}
