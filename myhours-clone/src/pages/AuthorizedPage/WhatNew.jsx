import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const WhatNew = () => {
  return (
    <>
      <Flex>
        <Box width="100%" borderBottom="0.5px solid lightgrey">
          <Box width="20%" margin="auto" padding="15px">
            <Image
              w="170px"
              src="https://allhoursproductb0b1.blob.core.windows.net/static-files/myhours_logo_icon.svg"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Flex>
      <br />
      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
            Approve timesheets via Timesheet report
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
            New feature{" "}
          </Button>
          <br /> <br />
          <Text>
            My Hours customers that use the Approval workflow will be glad to
            learn that supervisors (admins or managers with permissions) can now
            Approve or Reject timesheets via Timesheet report as well.
          </Text>
          <Text>
            When a supervisor is not interested in the details of each
            individual time log, the Timesheet report is the perfect interface
            to approve or reject timesheets in bulk.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/092/745-cc7dbd916f2bbc7921af5b9b32e4c625b6d83e0e.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
          <Text>
            Please note that this interface is currently available only for
            accounts with manual timesheet submission (see previous changelog
            item).
          </Text>
        </Box>
        <Box></Box>
      </Flex>

      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
            Submit timesheets manually
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
            New feature{" "}
          </Button>
          <br /> <br />
          <Text>
            Until now, the entered timesheets were always saved and submitted
            automatically. This was sometimes an issue in case a person was not
            yet finished with their timesheet. On the other hand, supervisors
            weren't really sure whether the data in the reports is final.
          </Text>
          <Text>
            From now on, administrators can decide on "Manual timesheet
            submission" which enables their team members to keep drafts of their
            timesheet as "Unsubmitted time". And only when they are ready, they
            can submit the timesheet and leave a message to their supervisor.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/092/744-1de83826ce8de62a297fad447724cce09604f7a8.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
          <Text>
            Unsubmitted inputs are marked with a blue border. To learn more
            about how it works, take a look at the help article.
          </Text>
        </Box>
        <Box></Box>
      </Flex>

      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
            Billable amount and Costs on Timesheet report
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
            New feature{" "}
          </Button>
          <br /> <br />
          <Text>
            Many of you use Timesheet as the default report and you'll be glad
            to see that we have now added Billable amount and Total costs
            columns to it as well. You can add them to the view with the
            standard column chooser.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/083/051-6272a11367c62e3c75c5a9f43a30f75012c0358a.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
        </Box>
        <Box></Box>
      </Flex>

      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
            Bulk editing of Team members
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
            New feature{" "}
          </Button>
          <br /> <br />
          <Text>
            Administrators will be glad to learn that you can now update Team
            members in bulk. Archive, change rates, roles or approval settings
            for multiple team members at once.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/083/039-ce2cfd779162340721518e0b503afabf6aeaddb5.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
        </Box>
        <Box></Box>
      </Flex>

      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
            Changed (Project) Manager role
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
            New feature{" "}
          </Button>
          <br /> <br />
          <Text>
            We re-thought the Project manager role, re-developed it from scratch
            and re-named it to "Manager".
          </Text>
          <Text>
            By default, the Manager role works the same way as did the Project
            manager role. Only it's even more powerful and flexible.
          </Text>
          <Text>
            Administrators can invite new or edit existing team members with a
            Manager role and decide to:
          </Text>
          <Text>
            1. Limit reporting access to only their Team (you'll find Team
            assignments under "Teams" section)
          </Text>
          <Text>
            2. Enable the person to also manage, approve or reject logs of their
            team members.
          </Text>
          v
          <Text>
            3. Disable editing of projects and tasks (read-only access)
          </Text>
          <Text>4. Hide labor or billing rates</Text>
          <Text>
            With regard to the 4th point above, we should note that all users
            can still view their own costs (labor and expenses), but can never
            view rates of other team members. Unless you allow specific Managers
            to have access to labor or billing rates.
          </Text>
          <Text>
            For existing accounts: all Project managers will be migrated to the
            Manager role. Nothing will change for them,unless you decide to make
            changes in the Team members section. In case you allowed Project
            managers to view Billing rates (via Account settings), your Managers
            will have this option turned on.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/079/631-c588808d9289ca0b663b7876ce6785ed13cf311f.png"
              alt="Dan Abramov"
            />
          </Box>
         
        </Box>
        <Box></Box>
      </Flex>


      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
          Improved filenames of downloaded reports
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
           Improvement
          </Button>
          <br /> <br />
          <Text>
          In order to keep your reports organized when downloaded, we added a date stamp to the file name.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/079/627-1e64605a3c9eaa6d9fa317e93ed06efbf8eb26e8.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
        </Box>
        <Box></Box>
      </Flex>


      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
          Copy time log
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
         New feature
          </Button>
          <br /> <br />
          <Text>
          Much requested feature of copying time logs is now available for all on the new Track daily timer interface.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/079/626-bf5fc93c405d835206840139c18969ae886e401d.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
        </Box>
        <Box></Box>
      </Flex>
<br /><br />
      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
          Lock entire date range
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
        Improvement 
          </Button>
          <br /> <br />
          <Text>
          While My Hours offered an auto-locking feature for a while, we kept hearing that it needs to be improved. So we rewrote the locking system from scratch. Administrators can enable daily, weekly or monthly lock, which will result in:
          </Text>
          <Text>
         1. The system will lock every time log in the past (not only from the moment on)
          </Text>

           <Text>
          2. When a date period is locked, Normal users and Managers can no longer add, edit or delete logs in that period.
          </Text>
          <Text>
         3. Administrators can add, edit or delete logs even in the locked period. Bulk editing is disabled for all.
          </Text>
          <br />
        </Box>
        <Box></Box>
      </Flex>


      
      <br />
      <br />

      <Flex justifyContent="space-between">
        <Box></Box>
        <Box color="rgb(71,82,93)" lineHeight="2" width="40%">
          <Text fontSize="25px" fontWeight="bold">
          Update billable setting in bulk
          </Text>
          <Button
            borderRadius="20px"
            backgroundColor="rgb(120,146,200)"
            padding="10px"
          >
         New feature
          </Button>
          <br /> <br />
          <Text>
          Editing time logs in bulk was always available in the Activity report. With the new release we've added the ability to change the billable flag for multiple time logs in bulk.
          </Text>
          <br />
          <Box>
            <Image
              objectFit="cover"
              src="https://cloud.headwayapp.co/changelogs_images/images/big/000/076/496-aeeadcc44e71dc3e22b2eb522d685a56180d565a.png"
              alt="Dan Abramov"
            />
          </Box>
          <br />
        </Box>
        <Box></Box>
      </Flex>
    </>
  );
};

export default WhatNew;
