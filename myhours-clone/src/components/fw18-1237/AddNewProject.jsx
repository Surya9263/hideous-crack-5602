import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function () {
 
    const projectdata = JSON.parse(localStorage.getItem("project")) || []

    const [init , setInit] = useState({projectName:"",client:"",description:"",billable:"",rounding:false,timeInterval:"",approval:false})
    const handleChange = (e) => {
          const {name,value,checked,type} = e.target
        
         
         
        
          setInit(
           {
            ...init,
            [name]:type==="checkbox"?checked:value,
            date:new Date()
        
            
           }
          )
    }

    const handlesubmit = () => {
        projectdata.push(init)
        localStorage.setItem("project",JSON.stringify(projectdata))
        setInit({projectName:"",client:"",description:"",billable:"",rounding:"",timeInterval:"",approval:false})
    }

  return (
    
    <Box
      h={"1000px"}
      pt="30px"
      pr={"30px"}
      pl="30px"
      pb={"75px"}
      w={"100%"}
      border="1px"
      borderColor="gray.300"
    >
       
      {/* container start */}

      <Box
        display={"flex"}
        gap="25px"
        flexDirection="column"
        justifyContent={"start"}
        w={"65%"}
        border={"1px"}
        borderColor="white"
        height={"900px"}
        margin="auto"
      >
        <Text fontWeight="600" fontSize="4xl">
          Add Project{" "}
        </Text>
        {/* name */}

        <Box >
          {" "}
          <Text  mb={"10px"} fontWeight={"600"}>NAME</Text>
          <Input  value={init.projectName} name={"projectName"} onChange={handleChange} placeholder="Enter name of the project" />
        </Box>

        {/* client */}
        <Box>
          <Text  mb={"10px"} fontWeight={"600"}>CLIENT</Text>
          <Select value={init.client} name="client" onChange={handleChange} placeholder="Select...">
            <option value={"masai"}>masai</option>
          </Select>
        </Box>

        {/* text */}
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>DESCRIPTION</Text>
          <Textarea value={init.description} onChange={handleChange} name="description" placeholder="Edit project description" size="sm" />
        </Box>

        {/* billable setting */}

        <Box>
          <Text  fontWeight={"600"}>Billable Settings</Text>
          <Text mb={"10px"}>  Project-based rate</Text>
          <Select value={init.billable} onChange={handleChange} name="billable" >
            <option>Select settings</option>
            <option value={"Team member-based rate"}>Team member-based rate</option>
            <option value={"Task-based rate"}>Task-based rate</option>
            <option value={"Project-based rate"}>Project-based rate</option>
            <option value={"Non billable"}>Non billable</option>
          </Select>
        </Box>

        {/* Rounding of time */}
        <Box>
          {" "}
          <Text fontWeight={"600"}>Rounding of time</Text>
          <Text fontSize={"14.5px"}>
            Automatically round log’s duration for billing purposes (rounded
            duration). Actual duration is preserved.
          </Text>
          <Box mt={"10px"} display={"flex"}>
            {" "}
            <Select value={init.rounding} onChange={handleChange} name="rounding" w={"50%"}>
              <option value={false}>No Rounding</option>
              <option value={"Round up"}>Round up</option>
              <option value={"Round to the nearest"}>Round to the nearest</option>
              <option value={"Round down"}>Round down</option>
              <option value={"Round down"}>Round down</option>
            </Select>
            { init.rounding   && <Select value={init.timeInterval} onChange={handleChange} name="timeInterval" w={"50%"}>
              <option>Select interval(min)</option>
              <option value={1}>1 minutes</option>
              <option value={5}>5 minutes</option>
              <option value={6}>6 minutes</option>
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
            </Select>}
          </Box>
        </Box>

        {/* approvoal */}
        <Box>
          <Text fontWeight={"600"}>Approval Settings</Text>

          <label htmlFor="">
        
        <p>If selected, project's time logs will appear as “pending” </p> 
          <input value={init.approval} style={{marginTop:"-9px"}} type="checkbox" checked={init.approval} onChange={handleChange} name="approval"  />
          

           
          </label>
    
        
          
        </Box>
        <Box>
          <Button onClick={handlesubmit} colorScheme="blue">Create Project</Button>
        </Box>
      </Box>
    </Box>
  );
}
