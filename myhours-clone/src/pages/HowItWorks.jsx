import React from 'react';
import {Box, Flex, Text, Heading, Button} from '@chakra-ui/react';
import ReactPlayer from "react-player";
import Features from '../components/how-it-works/Features';
import Steps from '../components/how-it-works/Steps';
import Supports from '../components/how-it-works/Supports';

const featuresData = [
	{
		title: "Organize your work with projects and tasks",
		description: "Breaking down your work into projects and tasks is done with a few keystrokes. Prioritize tasks, add details and assign them to your team to complete. Set up an estimated budget on a project or task level.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd7198fa6df4249877e6d5b_HIW-1(1).png"
	},
	{
		title: "Set flexible billable rates and manage rate changes",
		description: "Every client, project, task and team member can be billed with a custom rate, but with smart defaults. And, when rates change, you decide how it applies to your past work.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/60c3106b6d15b4476d545c47_Project%20billing.png"
	},
	{
		title: "Track your time working with all the details",
		description: "Tracking work time is more than a few fields. Add styled notes to your logs, tag with custom keywords, attach files and enter expenses. With keyboard shortcuts, you can do it in no-time.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61693180d0c70441fdcc29cd_Timesheet%20with%20timer-p-1080.png"
	},
	{
		title: "Dazzle your clients with custom reports",
		description: "No more one-style-fits-all reports. Go beyond filters and set up reports the way you or your clients want them, without having to retreat back to Excel.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd71990c1a06b2e03f1be70_HIW-4(1).png"
	},
	{
		title: "Look at the time spent from every angle",
		description: "Fancy dashboards are not enough and with My Hours you can calculate your profit, generate real-time pivot tables or download a simple weekly timesheet.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692c9dbe4680c6916e960b_time-analytics.png"
	},
	{
		title: "Approve or comment on your team’s time logs  ",
		description: "Going through every timesheet is a hassle. Select a few projects or team members that might need a careful inspection, while other time logs do not need explicit approval.",
		featuresImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/61692ce83988430ca662abb6_Approve%20timesheets-p-1080.png"
	}
];

const stepsData = [
	{
		title: "Keep clients in the loop with scheduled email reports",
		description: "Setting and downloading reports each month takes precious time. Save your report settings and have My Hours send it to you or your clients directly every period.",
		stepsImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6bd377fbe34a0cc7a0f_HIW-7.png"
	},
	{
		title: "Create invoices straight from your tracked hours",
		description: "No need for an additional tool that handles the invoicing. Calculate the billable amount for each client and generate a numbered invoice that can be sent via email straight away.",
		stepsImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc4e6d0c755c679d71eda9f_HIW-8.png"
	},
	{
		title: "Flexible, but simple access roles",
		description: "With a simple 3-role system, you’ll always know who sees what. You can hide costs and billable amounts from anyone, except account administrators.",
		stepsImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc913df96a46f4b42ee4264_Roles-p-800.png"
	},
	{
		title: "Count your chickens and calculate your costs",
		description: "On top of billable rates, teams can add labor costs and expenses. Monitor your project costs with a (monthly) budget and calculate your profits or losses.",
		stepsImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc91420b5951fed1bb2a187_Chickens(1).png"
	},
];

const SupportData = [
	{
		title: "Sync your data with more than a 1000 tools",
		description: "Transfer clients, projects and tasks from Quickbooks and other solutions via Zapier. Documented API enables tech-savvy folks to build their own integrations.",
		supportImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fc9145d6e47e935f0570ff3_Integrations-p-500.png"
	},
	{
		title: "Track time on the go with a mobile app",
		description: "Besides tracking time, add new projects, manage tasks and view reports - all through our mobile apps. Both iOS and Android are supported.",
		supportImg: "https://uploads-ssl.webflow.com/5c77a918ef19681741be7bca/5fd73713f912e4498947d1a3_HIW-mobile%20(1)(1)-p-500.png"
	},
]

const HowItWorks = () => {
  return (
    <>
    <Flex textAlign={'center'} alignItems='center' width="85%" margin={'auto'} mt={20} gap={8} direction='column'>
	<Text fontSize={'6xl'}>How it works</Text>
	<Heading fontSize={'4xl'}>& why you should switch to My Hours</Heading>
	<Text fontSize={'3xl'}>Time tracking was a pain. We fixed it and made time tracking worth the effort. My Hours is easy to use and gets the most out of your data with powerful reporting. Teams that use My Hours are more productive, efficient and organized.</Text>
	<Button width={52} bg='rgb(59,143,194)' color={'white'} size='lg'>Get Startde - It's Free</Button>	
    </Flex>
    <Flex width={[400, 600, 600, 700, 900]} height={[312, 412, 412, 462, 580]}  margin="auto" mt={20} mb={20} p={4}>
        <Box boxShadow='2xl' width={'100%'} height={'100%'}>
	  <ReactPlayer url="https://youtu.be/VpMysclixyQ" controls width={'100%'} height={'100%'} />
	  </Box>
    </Flex>
    <Box width={['90%', '75%']} margin='auto'>
	{featuresData.map((feature)=>(
		<Features {...feature}/>
	))}
    </Box>
    <Box>
	{stepsData.map((steps)=>(
		<Steps {...steps}/>
	))}
    </Box>
    {/* <Flex p={14} gap={24}>
	{SupportData.map((support)=>(
		<Supports {...support}/>
	))}
    </Flex> */}
    </>
  )
}

export default HowItWorks;