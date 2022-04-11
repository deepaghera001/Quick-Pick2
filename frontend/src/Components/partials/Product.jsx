import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
} from '@chakra-ui/react';

//   import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

const data = {
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
};

const Product = (props) => {
    return (
        //   <Flex p={50} w="full" alignItems="center" justifyContent="center">
        
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="250px"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                mr={1}  my={3}
                >
                {data.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="red.200"
                    />
                )}

                <Image
                    src={props.imageURL}
                    alt={`Picture of ${props.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    {/* <Box d="flex" alignItems="baseline">
                        {props.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box> */}
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {props.name}
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        {/* <Rating rating={props.rating} numReviews={props.numReviews} /> */}
                        <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="xl" mr={2}>
                                ₹
                            </Box>
                            {props.price.toFixed(2)}
                        </Box>
                    </Flex>
                </Box>
            </Box>
        //   </Flex>
    );
}

export default Product;