import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../API/api_url'

export default function DisplayShops() {
    const [shops, setshops] = useState([]);
    useEffect(() => {
        getAllShop();
    }, []);

    const getAllShop = async () => {
        console.log('s///')
        const shops = await axios.get(`${API}/api/shop_register`)
        setshops(shops.data.userdata)
        console.log('shops are: ', shops)

    }
    return (
        <div>AllShop</div>
    )
}
