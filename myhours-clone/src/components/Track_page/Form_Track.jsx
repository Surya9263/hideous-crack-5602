import { CheckIcon, LinkIcon, SettingsIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FaToolbox,FaListUl,FaListOl,FaQuoteRight } from "react-icons/fa";
import { TbTag,TbLink } from "react-icons/tb";
import { BiItalic,BiDollar } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { VscCaseSensitive } from "react-icons/vsc";
import { BsHourglassTop ,BsStarFill} from "react-icons/bs";
import { WiTime8 ,WiTime5} from "react-icons/wi";
import { AiFillCaretDown} from "react-icons/ai";
import "./track.css";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

// ## work completed

// initial object data
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
const fstyle={
  bold:false,
  italic:false,
  h1:false,
  h2:false,
  Aa:false
}

function FormTrack({setOpen,status,setStatus}) {

const  Data =JSON.parse(localStorage.getItem('TaskData')) || []
  const [data,setData]=useState(init)
  const [style,setStyle]=useState(fstyle);
  const {bold,italic,h1,h2,Aa}=style


// handle form data or input data
  function handleChange(e){
    const {name,value}=e.target;
    setData({...data,
    [name]:value
    })
    
  }
  const {client,task,desc,tags,dur,st,end,exp}=data
  function handleSubmit(){

    if(!client||!task||!desc||!tags){
      alert("please fill Time Log section")
      return
    }
   
else {localStorage.setItem("TaskData",JSON.stringify([data,...Data]))
  // setData(init)
}

  }
 


  return (
    <Box className="trackform" padding={"1.5rem"} lineHeight={"2rem"} width='100%' mb={'2rem'}>
      <Flex color={"#375d75"} justifyContent={"space-between"}>
        <Box fontSize={"23"} >
          Add a time log <SettingsIcon style={{ fontSize: "15px" }} />
        </Box>
          
        <Box _hover={{bg:"lightgrey",p:"0.1rem 0.2rem",borderRadius:"0.2rem"}} onClick={()=>setOpen(p=>!p)}>
          <SmallCloseIcon color={"grey"} fontSize={"1.3rem"}  />
        </Box>
      </Flex>
      {/* form inputs */}
      <Flex className="trackflex" w={'100%'}  >
        <Box className="trackform1" 
        // width={"65%"}
        mr="1rem" >
          <label className="tfont">
            CLIENT & PROJECT< sup className='redsup'>*</sup>
            <InputGroup border="0.5rem" width={"97%"} m={"3px 0"}>
              <InputLeftElement children={<FaToolbox color="grey" />} />
              <Input type="text"  placeholder="Select or create a project"
              value={client}
             
              name='client'
              onChange={(e)=>handleChange(e)}
              />
            </InputGroup>
          </label>
          <Flex gap={"2"} mb={2}>
            <Box width={"48%"}>
              <label className="tfont">
                TASK
                <InputGroup border="0.5rem" m={"3px 0"}>
                  <InputLeftElement children={<CheckIcon color="grey" />} />
                  <Input type="text" placeholder="create a task"
                  value={task}
                  name='task'
                  onChange={(e)=>handleChange(e)}
                  />
                </InputGroup>
              </label>
            </Box>
            <Box width={"47.5%"}>
              <label className="tfont">
                TAGS
                <InputGroup border="0.5rem" m={"3px 0"}>
                  <InputLeftElement children={<TbTag color="grey" />} />
                  <Input type="text" placeholder="create a tags" name='tags'
                  value={tags}
                  onChange={(e)=>handleChange(e)} />
                </InputGroup>
              </label>
            </Box>
           
          </Flex>
           {/* text area */}
           <Box mt={'2rem'} className="textbox" border={"1px solid lightgrey"} borderRadius={"0.4rem"}  width={"97%"} bgColor={"#fff"}>
            <Flex justifyContent={'space-between'}m={"0 0.5rem"}>
             { !Aa? <Flex border="0.5rem" m="4px" gap={2} color={"grey"} >
                <Text onClick={()=>setStyle({...style,bold:!style.bold})} _hover={{color:'blue.400'}}  color={bold?'blue.400':"none"} ><b>B</b></Text>
                <Text mt={"8px"}  onClick={()=>setStyle({...style,italic:!style.italic})}  _hover={{color:'blue.400'}}   color={italic?'blue.400':"none"} ><BiItalic  /></Text>
                <Text color={h1?'blue.400':"none"}  onClick={()=>setStyle({...style,h1:!style.h1,h2:false})} _hover={{color:'blue.400'}} ><b>H<small>1</small></b></Text>
                <Text color={h2?'blue.400':"none"}   onClick={()=>setStyle({...style,h2:!style.h2,h1:false})} _hover={{color:'blue.400'}} ><b>H<small>2</small></b></Text>
                <Text mt={"8px"} _hover={{color:'blue.400'}} ><b> <TbLink /></b></Text>
                <Text mt={"8px"} _hover={{color:'blue.400'}} ><b> <FaListUl /></b></Text>
                <Text mt={"8px"} _hover={{color:'blue.400'}} ><b> <FaListOl /></b></Text>
                <Text mt={"8px"} _hover={{color:'blue.400'}} ><b> <FaQuoteRight fontSize={"0.9rem"} /></b></Text>
                <Text onClick={()=>setStyle({bold:false,italic:false,h1:false,h2:false,Aa:false})} color='lightgrey' _hover={{color:'blue.400'}} >Normal</Text>
              
              </Flex>:<Box textColor={'lightgrey'} pl="0.5rem" >Write Something</Box>}
              <Flex textAlign='end'>
                <Text  pt={1} mt={"4px"}><b> <ImAttachment /></b></Text>
                <Text onClick={()=>setStyle({...style,Aa:!style.Aa})}  pt={1} mt={"0.1rem"} ><b> <VscCaseSensitive  fontSize={"1.5rem"} /></b></Text>

              </Flex>
            </Flex>
            
              <Textarea border={"none"} borderTop={"1px solid"} placeholder="Here is a sample placeholder" size="sm" 
              fontWeight={bold?'bold':'normal'}
              fontStyle={italic?'italic':'none'}
              fontSize={h1?"30px":h2?"27px":""}
              color={'grey'}
              value={desc} 
              name='desc'
              onChange={(e)=>handleChange(e)}  />
            </Box>
        </Box>
        <Box className="trackform2"
        //  width={"35%"}
          mb={'2rem'}>
          <Box width={"95%"} m={"auto"}>
          <label className="tfont">
            TIME & DATE <span className="lightgrey">(optional)</span>
            <InputGroup textAlign={"center"} border="0.5rem" width={"100%"} m={"3px 0"}>
              <InputLeftElement children={<BsHourglassTop color="grey" />} />
              <Input type="number" placeholder="Duration..."   value={dur} 
              name='dur'
              onChange={(e)=>handleChange(e)}  />
            </InputGroup>
          </label>
          {/* start time end time */}
          <Flex gap={"2"} mb={2}>
            <Box width={"50%"}>
              <label className="tfont">
                TASK <span className="lightgrey">(optional)</span>
                <InputGroup border="0.5rem" m={"3px 0"}>
                  <InputLeftElement children={<WiTime8 color="grey" />} />
                  <Input type="number" placeholder="Start time..."  value={st} 
              name='st'
              onChange={(e)=>handleChange(e)}  />
                </InputGroup>
              </label>
            </Box>
            <Box width={"50%"}>
              <label className="tfont">
                TAGS <span className="lightgrey">(optional)</span>
                <InputGroup border="0.5rem" m={"3px 0"}>
                  <InputLeftElement children={<WiTime5 color="grey" />} />
                  <Input type="number" placeholder="End Time..."  value={end} 
              name='end'
              onChange={(e)=>handleChange(e)}  />
                </InputGroup>
              </label>
            </Box>
           

           
          </Flex>
          <Box>
            <label className="tfont">
            EXPENSES <span className="lightgrey">(optional)</span>
            <InputGroup textAlign={"center"} border="0.5rem" width={"100%"} m={"3px 0"}>
              <InputLeftElement children={<BiDollar color="grey" />} />
              <Input type="number" placeholder="Enter Expenses amount..."  value={exp} 
              name='exp'
              onChange={(e)=>handleChange(e)}  />
            </InputGroup>
          </label>
            </Box>
            <Box lineHeight={"1.8rem"}>
              <label className="tfont">ECONOMY</label>
              <Flex gap={3}>
                <Box color={"green"}><b>$0</b></Box>
                <Flex gap={1}> <Box color={'grey'}>Billable Amount</Box> 
                <Box mt={1}>
                <AiFillCaretDown />
                </Box>
                </Flex>
              </Flex>
              <Flex gap={3}>
                <Box><b>$0</b></Box>
                <Flex gap={1}> <Box>Cost</Box> 
                <Box mt={1}>
                <AiFillCaretDown />
                </Box>
                </Flex>
              </Flex>

            </Box>



            </Box> 
        </Box>
      </Flex>

      {/* buttons */}
      <Flex gap={"1rem"} mt="2rem" >
        <Box >
          <Button fontSize={'16px'} p={'0 1.8rem'} bgColor={"#29BA60"} fontWeight="500"   color={"#fff"}  
          _hover={{bg:"green"}}
          onClick={()=>{
            handleSubmit();
           setStatus(p=>!p)
          
            console.log("added")
          }}
          >Add Project</Button>
        </Box>
        <Box>
          {/* start and close */}
          <Button className="btns" fontSize={'16px'} p={'0 1.8rem'}color={"#29BA60"} fontWeight="500" bgColor={' rgba(189, 247, 214, 0.733)'} 
          _hover={{bg:"rgb(127, 192, 138)",color:"white"}}
          onClick={()=>{
            handleSubmit()
            if(client||task||desc||tags){
              
              setOpen(prev=>!prev)
              return
            }
           
        
          }}
          >Add & Close</Button>
        </Box>
        
        <Box className="cancel">
          <Text className="close" color={'blue'}
          _hover={{textDecoration:'underline'}}
          onClick={()=>setOpen(p=>!p)}
          >Cancel</Text>
        </Box>
</Flex>
    </Box>
  );
}

export default FormTrack;