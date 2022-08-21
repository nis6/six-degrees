import { Box, Button, Input, Select, CloseButton } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

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
const modal = document.getElementById("modal");

export default function ConnectionForm({ showModal, onClose }) {
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (input !== "") setError(false);
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted, input value: ", input);
    if (input === "") setError(input === "");
    else setError(false);
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
            <FormLabel>Add Connection</FormLabel>
            {!isError ? (
              <FormHelperText>
                Please enter the name and type of relationship for this connection
                profile.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Please enter a name.</FormErrorMessage>
            )}
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              width="70%"
            />
            <Select variant="outline" placeholder="Select here" width="70%">
              <option>Friend</option>
              <option>Relative</option>
              <option>Spouse</option>
              <option>Parent</option>
              <option>Guardian</option>
            </Select>

            <Button
              size="s"
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
    modal
  );
}
