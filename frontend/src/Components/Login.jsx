import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	RadioGroup,
	Radio,
	useToast,
} from '@chakra-ui/react';
import { API } from "../API/api_url";
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../Routes/MainRoute';
import Alert from "./partials/Alert"
const axios = require('axios')

export default function Login() {

	// const { isuser, setisUser } = useContext(userContext)
	const toast = useToast();

	const [isShopkeeper, setShopkeeper] = useState(false);
	const [loginDetail, setLoginDetail] = useState({
		email: '',
		password: ''
	})

	useEffect(() => {


	}, [isShopkeeper]);

	// This will give a message in type of alert that can be remove in 3s
	const ShowToast = (details) => {
		toast({
			...details,
			duration: 3000,
			isClosable: true,
		})
	}

	const userLogin = (e) => {

		const isShopkeeper = e.target.value;
		// console.log('who', isShopkeeper)
		if (isShopkeeper === 'shopkeeper')
			setShopkeeper(true)
		else
			setShopkeeper(false)

	}

	const inputHandler = (e) => {
		const { name, value } = e.target;
		setLoginDetail((preVal) => {
			return {
				...preVal,
				[name]: value
			}
		})
	}

	const onSubmit = async () => {
		try {

			console.log('shopkeeper')
			const url = isShopkeeper ? `${API}/api/shop_login` : `${API}/api/customerLogin`;
			const response = await axios.post(url, loginDetail)
			console.log(response.data)
			if (response.data.statusCode === 200) {
				ShowToast({
					title: 'Login successfull',
					description: "You are now logged",
					status: 'success',
					variant: 'subtle',
				})
			}
			else {//if (response.data.statusCode === 400) 
				ShowToast({
					title: 'Bad credentials',
					description: response.data.message,
					status: 'error',
					variant: 'subtle'
				})
			}
		} catch (err) {

		}

		// else {
		// 	console.log('customer')
		// 	const response = await axios.post(, loginDetail)
		// 	if (response.data.statusCode === 200) {
		// 		ShowToast({
		// 			title: 'Login successfull',
		// 			description: "You are now logged",
		// 			status: 'success',
		// 			variant: 'subtle',
		// 		});
		// 	}

		// }
	}


	return (
		<Flex
			minH={'90vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={'400px'}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'} textAlign={'center'}>
						{isShopkeeper ? "Login for Shop" : "Login for Customer "}
					</Heading>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
					<Stack spacing={4}>
						<RadioGroup defaultValue='customer' >
							<Stack spacing={5} direction='row' >
								<Radio colorScheme='green' value='customer' onChange={userLogin}>
									Customer
								</Radio>
								<Radio colorScheme='green' value='shopkeeper' onChange={userLogin}>
									Shopkeeper
								</Radio>
							</Stack>
						</RadioGroup>

						<FormControl id="email" isRequired>
							<FormLabel>Email address</FormLabel>
							<Input type="email" name='email' onChange={inputHandler} />
						</FormControl>
						<FormControl id="password" isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input type='password' name='password' onChange={inputHandler} />
							</InputGroup>
						</FormControl>
						<Stack spacing={10} pt={2}>
							<Button
								loadingText="Submitting"
								size="lg"
								bg={'blue.400'}
								color={'white'}
								onClick={onSubmit}
								_hover={{
									bg: 'blue.500',
								}}>
								Sign In
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'}>
								Already a user? <Link color={'blue.400'} to="/signup">Sign Up</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}