import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React, { useState } from "react"



const init={
  client:'',
  task:'',
  tags:'',
  desc:'',
  dur:0,
  st:0,
  end:0,
  exp:0
}
export function Popup({e,i,setStatus}) {
  let Data = JSON.parse(localStorage.getItem('TaskData'))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState(init)

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    function handleChange(e){
      const {name,value}=e.target;
      setData({...data,
      [name]:value
      })
  
    }
    console.log(Data,"before")

   function handleSave(ind){
     
Data.splice(ind,1)
console.log(Data,"after")
Data.unshift(data)

    localStorage.setItem('TaskData',JSON.stringify(Data))
  onClose()
  setStatus((p) => !p);

   }
    
  
    return (
      <>
      
      { e.tags && <Text onClick={onOpen}
                    bg={"#CCE5FF"}
                    borderRadius={"5px"}
                    color={"#0062CC"}
                    fontSize={"12px"}
                    p={"2px 5px"}
                  >
                    {e.tags ? e.tags : "Edit"}
                  </Text>}
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>project Name</FormLabel>
                <Input onChange={(e)=>handleChange(e)} name='client'  ref={initialRef} placeholder='Project Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Task</FormLabel>
                <Input onChange={(e)=>handleChange(e)} name='task'  placeholder='Task' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Tags</FormLabel>
                <Input onChange={(e)=>handleChange(e)} name='tags'  placeholder='Tags' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input onChange={(e)=>handleChange(e)} name='desc'  placeholder='Description' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}   onClick ={()=>handleSave(i)}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }