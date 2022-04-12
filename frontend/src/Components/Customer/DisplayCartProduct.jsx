import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API } from "../../API/api_url";
import { useParams } from 'react-router-dom';
import { Box, Flex, Link, } from '@chakra-ui/react'
import Product from '../partials/Product'

export default function DisplayCartProduct() {
	const [cartProducts, setCartProducts] = useState([]);
	const { shop_id } = useParams();
	const fetchData = async () => {
		const response = await axios.get(`${API}/api/getcart/${shop_id}`);
		if (response.data.statusCode === 200) {
			console.log(response.data.data[0].productIds)
			setCartProducts(response.data.data[0].productIds);
		}
	}
	useEffect(() => {
		fetchData();
	}, [])

	return (

		<>

			<Flex justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
				{

					cartProducts.length > 0 ? cartProducts.map((value, index) => (
						<Box key={index}>
							<Link href={`/product/${value.productId.shop_id}/${value.productId._id}`}>
								<Product
									name={value.productId.name}
									imageURL={value.productId.image ? process.env.PUBLIC_URL + `/upload/images/${value.productId.image.imgId}` : ""}
									price={value.productId.price}
									description={value.productId.description}
								/>
							</Link>
						</Box>
					))
						: <h3>No products found</h3>
				}
			</Flex>
		</>
	)
}
