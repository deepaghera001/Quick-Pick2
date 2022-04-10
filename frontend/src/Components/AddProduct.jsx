// import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Flex,
    Box,
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
} from '@chakra-ui/react'
import { useState } from 'react'
// const axios = require('axios')

import axios from 'axios';

import React, { Component } from 'react';

// class AddProduct extends Component {

//     state = {

//         // Initially, no file is selected
//         selectedFile: null,

//     };

//     // On file select (from the pop up)
//     onFileChange = event => {

//         // Update the state
//         this.setState({ selectedFile: event.target.files[0] });

//     };

//     // On file upload (click the upload button)
//     onFileUpload = async () => {

//         // Create an object of formData
//         const formData = new FormData();

//         // Update the formData object
//         formData.append(
//             "productImage",
//             this.state.selectedFile,
//             this.state.selectedFile.name
//         );

//         // Details of the uploaded file
//         console.log(this.state.selectedFile);

//         // Request made to the backend api
//         // Send formData object
//         const add = await axios.post("http://localhost:5000/api/upload/6252de9fffd8a03fe865eb41", formData);
//         console.log('done', add)
//     };

//     // File content to be displayed after
//     // file upload is complete
//     fileData = () => {

//         if (this.state.selectedFile) {

//             return (
//                 <div>
//                     <h2>File Details:</h2>

//                     <p>File Name: {this.state.selectedFile.name}</p>


//                     <p>File Type: {this.state.selectedFile.type}</p>


//                     <p>
//                         Last Modified:{" "}
//                         {this.state.selectedFile.lastModifiedDate.toDateString()}
//                     </p>

//                 </div>
//             );
//         } else {
//             return (
//                 <div>
//                     <br />
//                     <h4>Choose before Pressing the Upload button</h4>
//                 </div>
//             );
//         }
//     };

//     render() {

//         return (
//             <div>
//                 <h1>
//                     GeeksforGeeks
//                 </h1>
//                 <h3>
//                     File Upload using React!
//                 </h3>
//                 <div>
//                     <input type="file" onChange={this.onFileChange} />
//                     <button onClick={this.onFileUpload}>
//                         Upload!
//                     </button>
//                 </div>
//                 {this.fileData()}
//             </div>
//         );
//     }
// }

// export default AddProduct;

export default function AddProduct() {
    const [productDetail, setproductDetail] = useState({
        shop_id: '625261e58268f50b24e752eb',
        name: '',
        description: '',
        stock: '',
        price: '',
        tags: []
    })
    const [image, setImage] = useState('')

    const inputHandler = (e) => {
        const { name, value } = e.target;
        // console.log(name, value)
        setproductDetail((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const inputImage = (e) => {
        console.log(e.target.value)
        setImage(e.target.files[0])
        console.log('p is', image)
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(productDetail);
        const res = await axios.post('http://localhost:5000/api/productDetail', productDetail)
        console.log('res is', res, 'id is', res.data.userdata._id)

        const formData = new FormData()
        formData.append('productImage', image)
        const res2 = await axios.post(`http://localhost:5000/api/upload/${res.data.userdata._id}`, formData)

        console.log(res2)

        if (res.data.statusCode === 200) {
            alert(res.data.message)
        } else {
            console.log('')
            alert(res.data.message)
        }
    }

    return (
        <>
            <Flex
                minH={'90vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Add New Product
                        </Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="name" isRequired>
                                <FormLabel>Product Name</FormLabel>
                                <Input type="text" name="name" onChange={inputHandler} />
                            </FormControl>

                            <FormControl id="description" isRequired>
                                <FormLabel>Description</FormLabel>
                                <Input type="text" name="description" onChange={inputHandler} />
                            </FormControl>


                            <FormControl id="image" isRequired>
                                <FormLabel>Image</FormLabel>
                                <Input type="file" name="image" onChange={inputImage} />
                            </FormControl>


                            <Stack spacing={5} direction='row'>
                                <FormControl id="stock" isRequired>
                                    <FormLabel>Stock</FormLabel>
                                    <InputGroup>
                                        <Input type='text' name='stock' onChange={inputHandler} />
                                    </InputGroup>
                                </FormControl>

                                <FormControl id="price" isRequired>
                                    <FormLabel>Price</FormLabel>
                                    <Input type="text" name="price" onChange={inputHandler} />
                                </FormControl>
                            </Stack>

                            <FormControl id="tags" isRequired>
                                <FormLabel>Tags</FormLabel>
                                <Input type="text" name="tags" onChange={inputHandler} />
                            </FormControl>


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
                                    Add Product
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>

        </>)
}
