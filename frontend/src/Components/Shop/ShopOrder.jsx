import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'; import Product from '../partials/ProductCard'
import Cart_product_card from '../partials/Cart_product_card';
import { ArrowForwardIcon, TimeIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../../API/api_url'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Heading,
    Avatar,
    Center,
    Box,
    Container,
    Divider,
    Button,
    Flex,
    Stack,
    Text,
    Image,
    useColorModeValue,
    InputGroup,
    InputLeftElement,
    Input,
    InputRightElement,
    Badge,
} from '@chakra-ui/react';
import OrderProducts from './OrderProducts';



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
            {
                orderDetail.length > 0 ? orderDetail.map((val, ind) => (
                    <OrderProducts
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
