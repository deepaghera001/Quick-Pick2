import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    RadioGroup,
    Radio,
    CheckboxGroup,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
const axios = require('axios')

// Sign up form for shop 
const ShopRegister = () => {

    const [shopDetail, setShopDetail] = useState({
        shop_name: '',
        email: '',
        password: '',
        name: '',
        phone_number: '',
        address: '',
        area: '',
        city: '',
        pincode: '',
        start_time: '',
        end_time: ''
    })

    const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setShopDetail((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const onsubmit = async () => {
        const res = await axios.post('http://localhost:5000/api/shop_register', shopDetail)
        console.log('res is', res)

        if (res.data.statusCode === 200) {
            alert(res.data.message)
        } else {
            console.log('')
            alert(res.data.message)
        }
    }

    return (
        <>
            {/* <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up for shop
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}> */}

            {/* <Stack spacing={4}> */}
            {/* <HStack>

                            <Box> */}
            <FormControl id="shop_name" isRequired>
                <FormLabel>Shop Name</FormLabel>
                <Input type="text" name="shop_name" onChange={inputHandler} />
            </FormControl>
            {/* </Box>
                            
                        </HStack> */}
            <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" onChange={inputHandler} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel>password</FormLabel>
                <InputGroup>
                    <Input type='password' name='password' onChange={inputHandler} />
                    <InputRightElement h={'full'}>
                        <Button
                            variant={'ghost'}
                        // onClick={() =>
                        //     setShowPassword((showPassword) => !showPassword)
                        // }
                        >
                            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon />} */}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="name" isRequired>
                <FormLabel>Owner Name</FormLabel>
                <Input type="text" name="name" onChange={inputHandler} />
            </FormControl>
            <FormControl id="phone_number" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input type="text" name="phone_number" onChange={inputHandler} />
            </FormControl>

            <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" name="address" onChange={inputHandler} />
            </FormControl>

            <Stack spacing={5} direction='row'>
                <FormControl id="area" isRequired>
                    <FormLabel>area</FormLabel>
                    <Input type="text" name="area" onChange={inputHandler} />
                </FormControl>
                <FormControl id="city" isRequired>
                    <FormLabel>city</FormLabel>
                    <Input type="text" name="city" onChange={inputHandler} />
                </FormControl>
                <FormControl id="pincode" isRequired>
                    <FormLabel>Pincode</FormLabel>
                    <Input type="text" name="pincode" onChange={inputHandler} />
                </FormControl>
            </Stack>

            <Stack spacing={5} direction='row'>
                <FormControl id="start_time" isRequired>
                    <FormLabel>Shop Starting Time</FormLabel>
                    <Input type="text" name="start_time" onChange={inputHandler} />
                </FormControl>
                <FormControl id="end_time" isRequired>
                    <FormLabel>Shop Ending Time</FormLabel>
                    <Input type="text" name="end_time" onChange={inputHandler} />
                </FormControl>
            </Stack>


            <Stack spacing={10} pt={2}>
                <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    onClick={onsubmit}
                    _hover={{
                        bg: 'blue.500',
                    }}>
                    Sign up
                </Button>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
            </Stack>
            {/* </Stack>
                    </Box>
                </Stack>
            </Flex> */}
        </>)
}

// Sign up form for customer
const CustomerRegiter = () => {

    const [custDetail, setCustDetail] = useState({
        email: '',
        phone_number: '',
        password: '',
        name: '',
        address: '',
        area: '',
        city: '',
        pincode: '',
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(name, value)

        setCustDetail((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }
    const onSubmit = async () => {
        const user = await axios.post('http://localhost:5000/api/customerRegister', custDetail)

        if (user.data.statusCode == 200) {
            alert(user.data.message)
        } else {
            alert(user.data.message)
        }

    }

    return (
        <>
            {/* <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up for Customer
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}> */}

            <Stack spacing={4}>
                {/* <HStack>

                            <Box> */}
                <FormControl id="custName" isRequired>
                    <FormLabel>Customer Name</FormLabel>
                    <Input type="text" name='name' onChange={handleInput} />
                </FormControl>
                {/* </Box>
                            
                        </HStack> */}
                <FormControl id="cusEmail" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" name='email' onChange={handleInput} />
                </FormControl>

                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input type='password' name='password' onChange={handleInput} />
                    </InputGroup>
                </FormControl>
                <FormControl id="phoneNo" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="text" name='phone_number' onChange={handleInput} />
                </FormControl>

                <FormControl id="address" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" name='address' onChange={handleInput} />
                </FormControl>

                <Stack spacing={5} direction='row'>
                    <FormControl id="area" isRequired>
                        <FormLabel>area</FormLabel>
                        <Input type="text" name='area' onChange={handleInput} />
                    </FormControl>
                    <FormControl id="city" isRequired>
                        <FormLabel>city</FormLabel>
                        <Input type="text" name='city' onChange={handleInput} />
                    </FormControl>
                    <FormControl id="Pincode" isRequired>
                        <FormLabel>Pincode</FormLabel>
                        <Input type="text" name='pincode' onChange={handleInput} />
                    </FormControl>
                </Stack>


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
                        Sign up
                    </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={'center'}>
                        Already a user? <Link color={'blue.400'}>Login</Link>
                    </Text>
                </Stack>
            </Stack>
            {/* </Box>
                </Stack>
            </Flex> */}
        </>)
}


// Signup form radio button
export default function SignUp() {
    const [isShopKeeper, setisShopkepeer] = useState(1);

    useEffect(() => {
    }, [isShopKeeper]);
    // checking the detail of cusomer and shopkeeper
    const user = (e) => {
        e.preventDefault();

        console.log('this is ', e.target.value, 'vla', isShopKeeper)
        if (e.target.value == 'shopkeeper')
            setisShopkepeer(0)
        else
            setisShopkepeer(1)
    }

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Sign up for {isShopKeeper ? "Customer" : "Shopkeeper"}
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <RadioGroup defaultValue='customer' my={2} mx={"auto"}>
                            <Stack spacing={5} direction='row' onChange={user}>
                                <Radio colorScheme='green' value='customer' checked>
                                    Customer
                                </Radio>
                                <Radio colorScheme='green' value='shopkeeper'>
                                    Shopkeeper
                                </Radio>
                            </Stack>
                        </RadioGroup>
                        <Stack spacing={4} my={3}>
                            {isShopKeeper == 1 ? <CustomerRegiter /> : <ShopRegister />}
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}