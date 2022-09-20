import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import ProfileForm from "./ProfileForm";
import { useState } from "react";

export default function Header({ ProfileDB }) {
  const [showModal, setModal] = useState(false);

  function toggleModal() {
    setModal(!showModal);
  }
  function onClose() {
    setModal(false);
    console.log("onClose: modal closed");
  }

  return (
    <Box
      position="relative"
      textAlign="center"
      color="whiteAlpha.700"
      height="60vh"
      top="0"
      padding="3rem"
    >
      <Heading as="h2">Six degrees of Seperation</Heading>
      <h2>
        Six Degrees of Separation (DOS) is the idea that you could reach any person
        in the world with fewer than six intermediate connections.
      </h2>
      <Flex flexDirection="row" padding="2rem" justify="center">
        <Button
          size="md"
          m="1rem"
          bg="whiteAlpha.900"
          border="solid 1px black"
          color="black"
          _hover={{ bg: "whiteAlpha.400", color: "whiteAlpha.900" }}
          _active={{ bg: "whiteAlpha.600" }}
          onClick={() => toggleModal()}
        >
          Add Profile
        </Button>
        <ProfileForm
          showModal={showModal}
          onClose={() => onClose()}
          Profiles={ProfileDB}
        />
        <Button
          size="md"
          m="1rem"
          bg="whiteAlpha.900"
          border="solid 1px black"
          color="black"
          _hover={{ bg: "whiteAlpha.400", color: "whiteAlpha.900" }}
          _active={{ bg: "whiteAlpha.600" }}
        >
          Check DOS
        </Button>
      </Flex>
    </Box>
  );
}
