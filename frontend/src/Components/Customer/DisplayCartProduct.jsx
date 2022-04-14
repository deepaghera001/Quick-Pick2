import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';import Product from '../partials/ProductCard'
import Cart_product_card from '../partials/Cart_product_card';
import { ArrowForwardIcon, TimeIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { API } from '../../API/api_url'

import {
	Box,
	Container,
	Divider,
	Button,
	Flex,
	Stack,
	Text,
	useColorModeValue,
	InputGroup,
	InputLeftElement,
	Input,
	InputRightElement,
} from '@chakra-ui/react';

export default function DisplayCartProduct() {
	const [cartProducts, setCartProducts] = useState([]);
	const { shop_id } = useParams();
	const [pickupTime, setPickupTime] = useState('');
	const [amount, setAmount] = useState(0);
	const [productDetails, setProductDetails] = useState(''); // array of all product that added in cart
	const fetchData = async () => {
		const response = await axios.get(`${API}/api/getcart/${shop_id}`);
		if (response.data.statusCode === 200) {
			// console.log(response.data.data[0].productIds)
			setCartProducts(response.data.data[0].productIds);
		}
	}

	const calAmountAndPD = () => {
		let tamount = 0;
		let tproduct_details = [];
		// console.log("Calculated")
		tproduct_details = cartProducts.map((value, index) => {
			console.log(value)
			tamount += value.productId.price*value.quantity;
			return {
				productId: value.productId._id,
				quantity: value.quantity,
			}
		})
		setAmount(tamount);
		setProductDetails(tproduct_details)
	}
	useEffect(() => {
		fetchData();
	}, [])
	useEffect(() => {
		calAmountAndPD();
	}, [cartProducts])

	const handleInputChange = (e) => {
		setPickupTime(e.target.value)
	}

	const PlaceOrder = async () => {
		// console.log("placing order")
		const order_detail = {
			shopId: shop_id,
			product_details: productDetails,
			amount: amount,
		}
		console.log(order_detail)

		const response = await axios.post(`${API}/api/makeOrder`, order_detail);
		// console.log(response.data)
		if(response.data.statusCode === 200){
			alert("Order Successfull");
		}else{
			alert("Error While doing order")
		}	
	}

	const removeFromCart = async (productId) => {
		console.log("Removing")
		console.log(cartProducts)
		setCartProducts(cartProducts.filter((value) => {
			// console.log("----", value, value.productId._id, )
			return value.productId._id !== productId
		}));
		// console.log(`${API}/api/remove/${shop_id}/${productId}`)
		const result = await axios.get(`${API}/api/remove/${shop_id}/${productId}`);	
		if(result.data.statusCode === 200){
			console.log("Product remove from cart in DB");
			// show alert here
		}else{
			console.error("Error while Removing product");
		}

	}

	return (

		<>
			<Container maxW={'1000px'} bg={useColorModeValue('gray.100', 'gray.700')} my={5} p={3} borderRadius={'md'}>
				<Flex direction={'row'} justifyContent={'space-around'}>
					<Box>
						{

							cartProducts.length > 0 ? cartProducts.map((value, index) => (
								<Box key={index}>
									
										<Cart_product_card
											name={value.productId.name}
											imageURL={value.productId.image ? process.env.PUBLIC_URL + `/upload/images/${value.productId.image.imgId}` : ""}
											price={value.productId.price}
											description={value.productId.description}
											quantity={value.quantity}
											productLink={`/product/${value.productId.shop_id}/${value.productId._id}`}
											product_id={value.productId._id}
											removeItem={removeFromCart}
										/>
									
								</Box>
							))
								: <h3>No products found</h3>
						}
						{/* <Cart_product_card /> */}
						{/* <Cart_product_card /> */}
					</Box>
					<Box mt={3} >
						<Box bg={useColorModeValue('white', 'gray.900')} borderRadius={'lg'} maxWidth={'200px'} p={4} height={'160px'} boxShadow={'md'}>
							<Flex direction={'row'} justifyContent={'space-between'} my={2}>
								<Text>SubCost: </Text>
								<Text>{amount}</Text>
							</Flex>
							<Flex direction={'row'} justifyContent={'space-between'} my={3}>
								<Text>Charges: </Text>
								<Text>{"+ 0.00"}</Text>
							</Flex>
							<Divider />
							<Flex direction={'row'} justifyContent={'space-between'} my={3} fontWeight={600}>
								<Text>Total: </Text>
								<Text>{amount}</Text>
							</Flex>
						</Box>
						<Box width={'200px'}>
							<Stack mt={3}>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										color='gray.300'
										fontSize='1.2em'
										children={<TimeIcon />}
									/>
									<Input placeholder='Enter Pickup time' value={pickupTime} onChange={handleInputChange} boxShadow={'md'}/>
								</InputGroup>
							</Stack>
							<Button
								rightIcon={<ArrowForwardIcon />}
								colorScheme='blue'
								variant='solid'
								width={'100%'}
								my={5}
								onClick={PlaceOrder}
								isDisabled={pickupTime ? false : true}
								boxShadow={'xl'}
								>
								Place Order
							</Button>
						</Box>

					</Box>
				</Flex>
			</Container>

			{/* <Flex justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
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
			</Flex> */}
		</>
	)
}
