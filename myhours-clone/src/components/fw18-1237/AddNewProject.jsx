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
import { useEffect, useState } from "react";
import Task from "./Task";

export default function AddNewProject({setData}) {
  const projectdata = JSON.parse(localStorage.getItem("project")) || [];
  const client = JSON.parse(localStorage.getItem("clients")) || [];
  const team = JSON.parse(localStorage.getItem("teams")) || [];
  const [task, setTask] = useState("")
  const [asg, setAsg] = useState([])

  const [init, setInit] = useState({
    projectName: "",
    client: "",
    hours: "",
    billamount: "",
    task: [] ,
            
          
    description: "",
    billable: "",
    rounding: "",
    timeInterval: "",
    approval: false,
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setInit({
      ...init,
      [name]: type === "checkbox" ? checked : value,
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      id: Date.now(),
    });
  };



  const handlesubmit = () => {
    projectdata.push(init);
    localStorage.setItem("project", JSON.stringify(projectdata));
    setData(projectdata)
    setInit({
      projectName: "",
      client: "",
      hours: "",
      billamount: "",
      description: "",
      billable: "",
      rounding: false,
      timeInterval: "",
      approval: false,
    });
  };

 
  return (
    <Box
      h={"auto"}
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
        borderColor="gray.300"
        padding={"10px"}
        height={"auto"}
        margin="auto"
      >
        <Text fontWeight="600" fontSize="4xl">
          Add Project{" "}
        </Text>
        {/* name */}

        <Box>
          {" "}
          <Text mb={"10px"} fontWeight={"600"}>
            NAME
          </Text>
          <Input
            value={init.projectName}
            name={"projectName"}
            onChange={handleChange}
            placeholder="Enter name of the project"
          />
        </Box>

        {/* client */}
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            CLIENT
          </Text>
          <Select
            value={init.client}
            name="client"
            onChange={handleChange}
            placeholder="Select..."
          >
            {client.map((elem) => (
              <option key={elem.id} value={elem.name}>
                {elem.name}
              </option>
            ))}
          </Select>
        </Box>

     

        {/* Hours */}
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            Project Hours
          </Text>
          <Input
            value={init.hours}
            name={"hours"}
            onChange={handleChange}
            type={"number"}
            placeholder="Enter Hours"
          />
        </Box>
        {/* text */}
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            DESCRIPTION
          </Text>
          <Textarea
            value={init.description}
            onChange={handleChange}
            name="description"
            placeholder="Edit project description"
            size="sm"
          />
        </Box>

        {/* billable setting */}

        <Box>
          <Text fontWeight={"600"}>Billable Settings</Text>
          <Text mb={"10px"}> Project-based rate</Text>
          <Select value={init.billable} onChange={handleChange} name="billable">
            <option>Select settings</option>
            <option value={"Team member-based rate"}>
              Team member-based rate
            </option>
            <option value={"Task-based rate"}>Task-based rate</option>
            <option value={"Project-based rate"}>Project-based rate</option>
            <option value={"false"}>Non billable</option>
          </Select>
        </Box>

        {/* Billable amount */}
        <Box>
          <Text mb={"10px"} fontWeight={"600"}>
            Billable amount
          </Text>
          <Input
            disabled={init.billable == "false"}
            value={init.billamount}
            name={"billamount"}
            onChange={handleChange}
            type={"number"}
            placeholder="Enter Amount"
          />
        </Box>
        {/* text */}

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
            <Select
              value={init.rounding}
              onChange={handleChange}
              name="rounding"
              w={"50%"}
            >
              <option value={"Round up"}>Round up</option>
              <option value={"Round to the nearest"}>
                Round to the nearest
              </option>
              <option value={"Round down"}>Round down</option>
              <option value={"Round down"}>Round down</option>
              <option value={"false"}>No Rounding</option>
            </Select>
            <Select
              disabled={init.rounding == "false"}
              value={init.timeInterval}
              onChange={handleChange}
              name="timeInterval"
              w={"50%"}
            >
              <option>Select interval(min)</option>
              <option value={1}>1 minutes</option>
              <option value={5}>5 minutes</option>
              <option value={6}>6 minutes</option>
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
            </Select>
          </Box>
        </Box>

        {/* approvoal */}
        <Box>
          <Text fontWeight={"600"}>Approval Settings</Text>

          <label htmlFor="">
            <p>If selected, project's time logs will appear as “pending” </p>
            <input
              value={init.approval}
              style={{ marginTop: "-9px" }}
              type="checkbox"
              checked={init.approval}
              onChange={handleChange}
              name="approval"
            />
          </label>
        </Box>
        <Box>
          <Button onClick={handlesubmit} colorScheme="blue">
            Create Project
          </Button>
        </Box>
      </Box>

      <Task/>
    </Box>
  );
}
