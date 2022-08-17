import { Box, Button, Input, Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ConnectionForm() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  const [error, setError] = useState(false);
  // function handleInput(e) {
  //   setInput(e.target.value);
  //   if (ProfileDB.hasOwnProperty(input));
  //   else setError(true);
  // }
  return (
    <Box border="black solid 1px" width="50vw" p="1rem" m="1rem" borderRadius="1rem">
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
        <Input type="text" value={input} onChange={handleInputChange} width="70%" />
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
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
