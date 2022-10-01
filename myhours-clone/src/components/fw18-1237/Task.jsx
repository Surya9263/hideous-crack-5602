import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";


export default function Task(){
  const project = JSON.parse(localStorage.getItem("project")) || [];
  const task = JSON.parse(localStorage.getItem("task")) ||[]

  const team = JSON.parse(localStorage.getItem("teams")) || [];

    const [init, setInit] = useState({project:"", task:"", assign:[]})

    

    const handleaddtask = () => {
    
     task.push(init)
     localStorage.setItem("task",JSON.stringify(task))
     setInit({project:"", task:"", assign:[]})
       
       
       }

    return (
        <Box width={"100%"} border={"1px"} borderColor="white" padding={"40px"}>
         {/* Task ***********************************************************************************/}
           <Box width={"70%"} border={"1px"} borderColor="gray.200" padding={"20px"} margin={"auto"}>
            
         <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            ASSIGN TASK {init.project}
          
          </Text>
          <Select
            value={init.project}
            name="project"
            onChange={(e)=>setInit({...init,project:e.target.value})}
            
          >
            <option value={""}>Select project</option>
            {project.map((elem) => (
              <option key={elem.id} value={elem.projectName}>
                {elem.projectName}
              </option>
            ))}
          </Select>
        </Box>
        
      <Box>
          {" "}
          <Text mb={"10px"} fontWeight={"600"}>
            TASK
          </Text>
          <Input
            value={init.task}
        
            onChange={(e)=>setInit({...init,task:e.target.value})}
            placeholder="Add task for project"
          />
        </Box>

        
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            ASSIGN TASK
            <Box display={"flex"} gap="10px" >
           {
           init.assign.map((elem)=><Text>{elem}</Text>)
           }
           </Box>
          </Text>
          <Select
            defaultValue={""}
            name="client"
            onChange={(e)=>setInit({...init,assign:[...init.assign,e.target.value]})}
            
          >
            <option value={""}>Select team</option>
            {team.map((elem) => (
              <option key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </Select>
        </Box>

        <Box>
          <Button onClick={handleaddtask} colorScheme="blue">
            Create Task
          </Button>
        </Box>


        </Box>

        {/* ************************************************************************************************** */}
        
        </Box>
    )
}