import { Container, Flex, space, Spacer } from '@chakra-ui/react'
import React from 'react'
import Product from '../partials/Product'

export default function DisplayProducts() {
  return (
    <>
      {/* <Container mt={4}> */}
        <Flex justifyItems={'self-start'} justifyContent={'space-around'} alignContent={'space-between'} wrap={'wrap'}>
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
{/* <Spacer /> */}
        <Product />


        <Product />

        </Flex>
      {/* </Container> */}
    </>
  )
}
