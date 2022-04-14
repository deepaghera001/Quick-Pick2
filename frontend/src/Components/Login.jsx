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
    useConst,
} from '@chakra-ui/react';
import { API } from "../API/api_url";
import { useState, useEffect, useContext } from 'react';
import { userContext } from '../Routes/MainRoute';
const axios = require('axios')

export default function Login() {

    const { isuser, setisUser } = useContext(userContext)

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
        if (isShopkeeper) {
            console.log('shopkeeper')
            const login = await axios.post(`${API}/api/shop_login`, loginDetail)
            alert(login.data.message)
            setisUser('shopkeeper')
            console.log(login.data)
        } else {
            console.log('customer')
            const login = await axios.post(`${API}/api/customerLogin`, loginDetail, {
                withCredentials: true
            })
            window.history.pushState('', '', '/displayproducts')
            console.log(login)
            alert(login.data.message)
            setisUser('customer')
            console.log(login.data)
        }
    }


    return (
        <Flex
            minH={'90vh'}
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
                                Sign In
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={'center'}>
                                Already a user? <Link color={'blue.400'} href="/signup">Sign Up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}