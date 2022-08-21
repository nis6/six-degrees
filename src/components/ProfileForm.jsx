import { Box, Button, Input } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { CloseButton } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.3);
`;

const Modal = document.getElementById("modal");

export default function ProfileForm({ showModal, onClose }) {
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);
  const [ProfileDB, setProfileDB] = useState({});
  const [doesExist, setExist] = useState(false);
  console.log("outside useEffect hook, isError set: ", isError);

  useEffect(() => {
    if (input !== "") setError(false);
  }, [input, ProfileDB]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted, input value: ", input);
    if (input === "") setError(input === "");
    else {
      setError(false);
      const ProfileDBtemp = JSON.parse(localStorage.getItem("ProfileDB"));
      console.log("here is ProfileDBtemp: ", ProfileDBtemp);

      if (ProfileDBtemp) setProfileDB(ProfileDBtemp);
      else localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
      console.log("This is ProfileDB before form submission: ", ProfileDB);

      if (ProfileDB.hasOwnProperty(input)) setExist(true);
      else {
        setExist(false);
        ProfileDB[input] = {};
        setProfileDB(ProfileDB);
      }
      localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
      console.log("This is ProfileDB after form submission: ", ProfileDB);
    }
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log("input set to: ", e.target.value);
  };

  if (!showModal) {
    console.log("No Modal to be shown!");
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Box
        border="black solid 1px"
        width="50vw"
        p="1rem"
        m="1rem"
        borderRadius="1rem"
        borderStyle="double"
        bg="white"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          p="0"
          m="0"
          zIndex="20"
          onClick={() => {
            setInput("");
            onClose();
          }}
        />
        <form onSubmit={handleFormSubmit}>
          <FormControl
            isInvalid={isError}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="0.5rem"
          >
            <FormLabel>Add Profile</FormLabel>
            {!isError ? (
              <FormHelperText>
                Please enter a name for the user profile.
              </FormHelperText>
            ) : doesExist ? (
              <FormErrorMessage>
                Please enter a name for the user profile.
              </FormErrorMessage>
            ) : (
              <FormErrorMessage>This user profile already exists.</FormErrorMessage>
            )}
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              width="60%"
              placeholder="Name"
            />
            <Button
              size="s"
              m="1rem"
              p="0.5rem 1rem"
              bg="blackAlpha.900"
              border="solid 1px black"
              color="white"
              _hover={{ bg: "blackAlpha.700", border: "none" }}
              _active={{ bg: "blackAlpha.600" }}
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </Overlay>,
    Modal
  );
}
