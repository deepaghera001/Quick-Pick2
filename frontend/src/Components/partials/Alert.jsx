import { useToast } from '@chakra-ui/react'
import { useEffect } from 'react';

export default function Alert(props) {
  const toast = useToast();
  const displayAlert = () => {
    toast({
      title: props.title,//'Login successfull',
      description: props.description,//"You are now logged",
      status: props.status,//'success',
      variant: 'subtle',
      duration: 3000,
      isClosable: true,
    })
  }

  useEffect(() => {
    console.log("props is ", props)
    displayAlert()
  })
  return (
    <>
    {/* {displayAlert()} */}
    </>
  )
}