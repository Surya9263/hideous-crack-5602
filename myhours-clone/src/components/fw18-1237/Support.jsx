import {
  Box,
  Alert,
  Button,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useDisclosure,
  AlertDescription,
} from "@chakra-ui/react";
import supty from "./Support.module.css";

export default function Support() {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const {
    onClose,
    onOpen,
    isOpen: isVisible,
  } = useDisclosure({ defaultIsOpen: false });

  return (
    <>
      <div className={supty.supparent}>
        <div className={supty.subheading}>We're here</div>
        <div className={supty.susubheading}>
          We typically respond in less than 24 hours on business days. Contact
          us via email, live chat or the form below.
        </div>
        <div className={supty.sulastheading}>
          <span>
            <a className={supty.readHelpLink} href="#">
              {" "}
              Read our help guides
            </a>
          </span>
          or send us a message to get detailed help.
        </div>
      </div>

      <iframe
        className={supty.youtube}
        src="https://www.youtube.com/embed/PqXO5AbUWpA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className={supty.uform}>
        <div className={supty.susubheading}>What do you need help with?</div>
        {/*feedback: fw18_1237 - you can loop this select easily check feedback comment how to do it in react?*/}
        <form onSubmit={handlesubmit} action="">
          <select name="" id="">
            <option value="">I have a question before signing up...</option>
            <option value="">I can't access my account...</option>
            <option value="">somthing might be broken...</option>
            <option value="">I would like to request a feature...</option>
            <option value="">I have a billing question...</option>
            <option value="">Other</option>
          </select>
          <br />
          <label htmlFor="">Message</label>
          <input type="text" placeholder="What's you issue or question?" />
          <br />
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter you name" />
          <br />
          <label htmlFor="">Email Address</label>
          <input type="text" placeholder="Enter you email address" />

          {isVisible ? (
            <Alert mt={"10px"} h={"50px"} w={"350px"} status="success">
              <AlertIcon />
              <Box w={"350px"}>
                <AlertTitle>Success!</AlertTitle>
                <AlertDescription></AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={onClose}
              />
            </Alert>
          ) : (
            <Button
              mt={"10px"}
              h="50px"
              w={"80px"}
              colorScheme="blue"
              onClick={onOpen}
            >
              Send
            </Button>
          )}
        </form>
      </div>
    </>
  );
}
