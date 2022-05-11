import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	useDisclosure,
	Button,
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	useColorModeValue,

} from '@chakra-ui/react'

export default function Modal2() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const openModel = () => {
		console.log("Opening model");
		onOpen()
	}
	return (
		<>
			<Button onClick={openModel} >Open Modal</Button>

			<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'lg'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						Thank you for your order

					</ModalHeader>
					{/* <ModalCloseButton /> */}
					<ModalBody pb={6}>

						<Center py={6}>
							<Box
								// maxW={'320px'}
								w={'full'}
								bg={useColorModeValue('white', 'gray.700')}
								// boxShadow={'2xl'}
								rounded={'lg'}
								p={6}
								textAlign={'center'}>
								<Avatar
									size={'xl'}
									src={
										`${process.env.PUBLIC_URL}/Images/Success.png`
									}
									alt={'Avatar Alt'}
									mb={4}
									pos={'relative'}

								/>
								<Heading fontSize={'2xl'} fontFamily={'body'} >
									Order submitted !
								</Heading>
								<Text fontWeight={600} color={'gray.500'} mb={4} mt={2}>
									Thanks for submitting your order.
								</Text>
								<Text
									textAlign={'center'}
									color={useColorModeValue('gray.700', 'gray.400')}
									px={3}>
									<Box mt={1}>
										<Text fontWeight={600} as='span'>Order Id: </Text>
										<Text as='span'> {"6257ee321d14334efc5899b0"} </Text>
									</Box>

									<Box mt={1}>
										<Text fontWeight={600} as='span'>Amount: </Text>
										<Text as='span'> {"2204"} </Text>
									</Box>

									<Box mt={1}>
										<Text fontWeight={600} as='span'>Secure Code: </Text>
										<Text as='span'> {"9383"} </Text>
									</Box>

									
									{/* Actress, musician, songwriter and artist. PM for work inquires or{' '}
											<Link href={'#'} color={'blue.400'}>
													#tag
											</Link>{' '}
											me in your posts */}
								</Text>


								{/* <Stack mt={8} direction={'row'} spacing={4}>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        _focus={{
                                            bg: 'gray.200',
                                        }}>
                                        Message
                                    </Button>
                                    <Button
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'blue.400'}
                                        color={'white'}
                                        boxShadow={
                                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                        }
                                        _hover={{
                                            bg: 'blue.500',
                                        }}
                                        _focus={{
                                            bg: 'blue.500',
                                        }}>
                                        Follow
                                    </Button>
                                </Stack> */}
							</Box>
						</Center>

						{/* <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            height='200px'
                        >
                            <AlertIcon boxSize='40px' mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                Order submitted!
                            </AlertTitle>
                            <AlertDescription maxWidth='sm'>
                            
                                Thanks for submitting your order.

                        
                    </AlertDescription>
                </Alert> */}
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Explore More
						</Button>
						{/* <Button onClick={onClose}>Cancel</Button> */}
					</ModalFooter>
				</ModalContent>
			</Modal >
		</>
	)
}