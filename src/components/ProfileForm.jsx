import { border, Box, Button, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ProfileForm() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Box
      border="black solid 1px"
      width="50vw"
      p="1rem"
      m="1rem"
      borderRadius="1rem"
      borderStyle="double"
    >
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
          <FormHelperText>Please enter a name for the user profile.</FormHelperText>
        ) : (
          <FormErrorMessage>
            Please enter a name for the user profile.
          </FormErrorMessage>
        )}
        <Input type="text" value={input} onChange={handleInputChange} width="60%" />
        <Button
          size="s"
          m="1rem"
          p="0.5rem 1rem"
          bg="blackAlpha.900"
          border="solid 1px black"
          color="white"
          _hover={{ bg: "blackAlpha.700", border: "none" }}
          _active={{ bg: "blackAlpha.600" }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
