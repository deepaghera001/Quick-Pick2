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
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
const axios = require('axios')

export default function Login() {
    const [isShopkeeper, setShopkeeper] = useState(false);
    const [loginDetail, setLoginDetail] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {


    }, [isShopkeeper]);

    const userLogin = (e) => {
        const isShopkeeper = e.target.value;
        console.log('who', isShopkeeper)
        if (isShopkeeper == 'shopkeeper')
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
        if (isShopkeeper) {
            console.log('shopkeeper')
            const login = await axios.post('http://localhost:5000/api/shop_login', loginDetail)
            alert(login.data.message)
            console.log(login.data)
        } else {
            console.log('customer')
            const login = await axios.post('http://localhost:5000/api/customerLogin', loginDetail)
            alert(login.data.message)
            console.log(login.data)
        }
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
                        <RadioGroup defaultValue='customer'>
                            <Stack spacing={5} direction='row' onChange={userLogin}>
                                <Radio colorScheme='green' value='customer'>
                                    Customer
                                </Radio>
                                <Radio colorScheme='green' value='shopkeeper'>
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
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'}>Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}