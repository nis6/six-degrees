import { useState, useEffect } from "react";
import { Button, Input } from "@chakra-ui/react";
import Modal from "./Modal";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function ProfileForm({ showModal, onClose, ProfileDB }) {
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);
  const [doesExist, setDoesExist] = useState(false);
  console.log("These are the profiles came from props: ", ProfileDB);

  useEffect(() => {
    if (input !== "") setError(false);
  }, [input, ProfileDB]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (input === "") {
      setError(true);
    } else if (ProfileDB.hasOwnProperty(input)) {
      console.log("Name already exists: ", doesExist);
      console.log("If it is an Error: ", isError);
      setDoesExist(true);
    } else {
      setDoesExist(false);
      Object.assign(ProfileDB, { [input]: [] });
      localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
      setInput("");
      onClose();
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  if (!showModal) {
    console.log("No Modal to be shown!");
    return null;
  }

  return (
    <Modal onClose={onClose} setInput={setInput}>
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
          {isError ? (
            <FormErrorMessage style={{ color: "red", textAlign: "center" }}>
              Please enter a name for the user profile.
            </FormErrorMessage>
          ) : doesExist ? (
            <FormHelperText style={{ color: "red", textAlign: "center" }}>
              This user profile already exists.
            </FormHelperText>
          ) : (
            <FormHelperText>
              Please enter a name for the user profile.
            </FormHelperText>
          )}
          <Input
            type="text"
            value={input}
            onChange={handleInputChange}
            width="60%"
            placeholder="Name"
            autoComplete="off"
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
    </Modal>
  );
}
