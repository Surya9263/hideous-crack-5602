import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import style from "../Landing_Page/LandingPage.module.css"

// feedback: fw17_0915 and fw19_0963 - How can we divide big components into smaller one that can be easily structured and organised with lesser code
const UseCasePage = () => {
  return (
    <>
    <Box textAlign="center">
      <Text fontSize="72px" fontWeight="light">Use cases</Text>
      <Text my="20px" fontSize="40px" fontWeight="bold" color="rgb(55, 93, 117)">& how My Hours solves problems</Text>
      <Text fontSize="28px" fontWeight="light" color="rgb(55, 93, 117)">From tracking time, to reporting and invoicing your clients, My Hours is there for you the whole time.</Text>
    </Box>
    <Box textAlign="center" m="20">      
      <Button p="8" colorScheme="telegram" backgroundColor="#3b8fc2" color="white" fontSize="20px">Get Started - It's Free</Button>
    </Box>
    <Flex justifyContent="center" gap="30px" mb="20px">
        <Box w="25%" h="full" py="20px" backgroundColor="#f5f9fc" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Project billing</Text>
          <Text ml="20px" fontSize="18px">Choose the billing method that is fair for your client and represents your actual work.</Text>
        </Box>
        <Box w="25%" h="full" py="20px" backgroundColor="#effbf3" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fbf86f7f19477d80b3be5ec_Billable%20settings-p-500.png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Time reports & Project analytics</Text>
          <Text ml="20px" fontSize="18px">Always know how much time has been spent on your projects and tasks in a specific period of time with easy-to-create reports.</Text>
        </Box>
        <Box w="25%" py="20px"  h="full" backgroundColor="#fffcf2" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6828a88f435b7c4ac2a_HIW-4-p-500.png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Attendance & Absence</Text>
          <Text ml="20px" fontSize="18px">Know who was present at work and track absences and the reasons behind them. Make your payroll faster and more accurate by exporting all the tracked data. Time, attendance and absence tracking in one streamlined solution.</Text>
        </Box>
    </Flex>
    <Flex justifyContent="center" gap="30px" mb="180px">
        <Box w="25%" h="full" py="20px" backgroundColor="#fdf5f6" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Expense tracking</Text>
          <Text ml="20px" fontSize="18px">Get expenses of your mind and into your invoice, without losing a cent or a receipt.</Text>
        </Box>
        <Box w="25%" h="full" py="20px" backgroundColor="#f5f9fc" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Calculating project profitability</Text>
          <Text ml="20px" fontSize="18px">Grow your business faster by prioritizing the projects that are worth your time, effort and resources.</Text>
        </Box>
        <Box w="25%" py="20px"  h="full" backgroundColor="#effbf3" textAlign="left" borderRadius="2xl" boxShadow="2xl">
          <img style={{width:"70%",marginLeft:"75px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd20dcf9d62a4f65fea8acd_Frame%2027(1)(1)-p-500.png" alt="" />
          <Text ml="20px" fontSize="32px" fontWeight="semibold" color="rgb(55, 93, 117)">Timesheet time tracking</Text>
          <Text ml="20px" fontSize="18px">Track time just as you are used to, but simpler Because you are tired of using unmanageable stacks of paper, excel templates, or complex apps week in week out.</Text>
        </Box>
    </Flex>
    <Box>
    <Text fontSize="28px" textAlign="center" color="rgb(55, 93, 117)" fontWeight="bold">My Hours has changed the way our customers work</Text>
    </Box>
    <Box w="34%" m="auto" textAlign={"center"} my="40px">
        <Text fontSize="20px" fontFamily="Avenirnextltpro">We’ve helped<span style={{textDecoration:"underline"}}> 250.000+ people</span> track their work <span style={{textDecoration:"underline"}}>since 2002.</span>
Our software <span style={{textDecoration:"underline"}}>does not include employee monitoring</span> and never will.</Text>
    </Box>
    <Flex justifyContent="center" gap="10px" fontSize="18px" textAlign="left">
        <Box w="22%">
            <Text>
            "Easy tracking of billable hours across various projects.<span className={style.textGradient}> Makes time tracking for different tasks simple."</span>
            </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">- Paul H., Business Owner</Text>
        </Box>
        <Box w="22%">
        <Text>
        "My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the week<span className={style.textGradient}> WAY FASTER."</span>
            </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">- Michael B., Manager</Text>
        </Box>
        <Box w="22%">
        <Text>
        "I've enjoyed using My Hours, and I use it every day. <span className={style.textGradient}>Great tool for tracking my time!" </span>
        </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Cody H., Engineer</Text>
        </Box>
    </Flex>
    <Flex justifyContent="center" gap="10px" fontSize="18px" textAlign="left" my="20px">
        <Box w="22%">
            <Text>
            "Ease of use, simplicity, streamlined, <span className={style.textGradient}>it really helped me get my hour tracking in order.</span> No negatives for the purpose and scope for which I am using the software."
            </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Arieh F., CFO</Text>
        </Box>
        <Box w="22%">
        <Text>
        "The software is very easy to set up, and you can start using it right away to track your time, <span className={style.textGradient}>assigning different hourly rates for different types of work."</span>
        </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Naomi S., Marketing Manager</Text>
        </Box>
        <Box w="22%">
        <Text>
        "Simple to use, perfect for the price, <span className={style.textGradient}>genuinely the best hour tracker I've used yet."</span>            
        </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Leah M., Engineer</Text>
        </Box>
    </Flex>
    <Flex justifyContent="center" gap="10px" fontSize="18px" textAlign="left">
        <Box w="22%">
            <Text>
            <span className={style.textGradient}>"Easy to use for my team members who are remote but hourly.</span> My House provides a simple and easy way to record, track and manage activity."
            </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Thomas S., Head of Customer Success</Text>
        </Box>
        <Box w="22%">
        <Text>
        "I really love this time tracking software.<span className={style.textGradient}> It keeps track of all my hours and is really easy to use.</span> I would definitely recommend this software. There is nothing that I don't like about this software."            </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍- Christina C., Paralegal</Text>
        </Box>
        <Box w="22%">
        <Text>
        "I love that I can track my hours and use it to <span className={style.textGradient}>generate meaningful reports</span> to measure time spent. It's intuitive, easy-to-use, and highly customizable."        </Text>
            <Text mt="15px" fontWeight="bold" fontStyle="italic">‍‍- Kristen B., Bussines Owner</Text>
        </Box>
    </Flex>
    <Flex justifyContent="center" gap="15px" alignItems="center">
        <Box my="80px">
        <a className={style.linkToWorking} href="#">Read more reviews</a>
        </Box>
        <Box>
        <img style={{width:"25px"}} src="https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/609937875793cc93f40c3a44_vectorpaint.svg" alt="" />
        </Box>
    </Flex>
    </>
  )
}

export default UseCasePage
