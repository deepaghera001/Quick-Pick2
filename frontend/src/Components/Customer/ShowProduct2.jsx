import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../API/api_url'
import axios from 'axios'

export default function ShowProduct2() {
  const { shop_id, productId } = useParams();
  const [productDetail, setproductDetail] = useState('')
  const [count, setcount] = useState(0)

  const handleCount = (e) => {
    const value = e.target.value;
    console.log(value)
    if (value == '-' && count > 1) {
      setcount(count - 1);
    }
    if (value == '+') {
      setcount(count + 1)
    }
  }
  const addtocart = async (e) => {
    const cart = await axios.post(`${API}/api/addtocart`, {
      shopId: shop_id,
      productId: productId,
      quantity: count
    })
    console.log(cart.data)
    alert('added to cart')
  }

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    const product = await axios.get(`${API}/api/productDetail/${productId}`)
    setproductDetail(product.data.userdata)
    console.log(product.data)
  }

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              productDetail.image
                ? process.env.PUBLIC_URL + `/upload/images/${productDetail.image.imgId}`
                : ""
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {productDetail.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={400}
              fontSize={'2xl'}
              my={3}
              >
              ₹ {productDetail.price}
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Stock: {productDetail.stock}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {productDetail.description}
              </Text>
              <Text fontSize={'lg'}>
                {productDetail.description}
              </Text>
            </VStack>
            {/* 
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Crystal:
                    </Text>{' '}
                    Domed, scratch‑resistant sapphire crystal with anti‑reflective
                    treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List> 
              </Box>
                */}
          </Stack>

          <Flex direction={"column"} m={'auto'}>
            <Text fontWeight={600}  size="md" my={2}>
              <Flex direction={'row'} justifyContent={'space-evenly'}>

                <Button bg={useColorModeValue('gray.900', 'gray.50')}
                  color={useColorModeValue('white', 'gray.900')} size='md' value="-" id="moinsminus" onClick={handleCount}>
                  -
                </Button>
                {count}     {/* if iteam is alrady present in cart then that is reamin */}
                <Button bg={useColorModeValue('gray.900', 'gray.50')}
                  color={useColorModeValue('white', 'gray.900')} size='md' value="+" id="moinsplus" onClick={handleCount}>
                  +
                </Button>
              </Flex>
            </Text>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
              onClick={addtocart}
            >
              Add to cart
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}