import {
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../API/api_url'
import axios from 'axios'

export default function ShowProduct() {

	const { shop_id, productId } = useParams();
	const [productDetail, setproductDetail] = useState('')

	useEffect(() => {
		getProduct();
	}, [productId]);

	const getProduct = async () => {
		const product = await axios.get(`${API}/api/productDetail/${productId}`)
		setproductDetail(product.data.userdata)
		console.log(product.data)
	}

	return (
		<Center py={6}>
			<Stack
				borderWidth="1px"
				borderRadius="lg"
				w={{ sm: '100%', md: '540px', lg: '900px' }}
				height={{ sm: '476px', md: '20rem', lg: '30rem' }}
				p={3}
				direction={{ base: 'column', md: 'row' }}
				bg={useColorModeValue('white', 'gray.900')}
				boxShadow={'2xl'}
				padding={4}>
				<Flex flex={1} bg="white.200">
					<Image
						objectFit="cover"
						boxSize="420px"
						src={productDetail.image
							? process.env.PUBLIC_URL + `/upload/images/${productDetail.image.imgId}`
							: ""
						}
						roundedTop="lg"

					/>
				</Flex>
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p={1}
					pt={2}>
					<Heading fontSize={'2xl'} fontFamily={'body'}>
						Name: {productDetail.name}
					</Heading>
					<Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
						Price: {productDetail.price}
					</Text>
					<Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
						Stock: {productDetail.stock}
					</Text>
					<Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
						{productDetail.description}
					</Text>

				</Stack>
			</Stack>
		</Center>
	);
}