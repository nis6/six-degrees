import { useState, useEffect } from "react";
import { Button, Input } from "@chakra-ui/react";
import Modal from "./Modal";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function ProfileForm({ showModal, onClose, Profiles }) {
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);
  const [ProfileDB, setProfileDB] = useState(Profiles);
  const [doesExist, setDoesExist] = useState(false);
  const [btnValid, setBtnValid] = useState('Submit')

  useEffect(() => {
    if (input !== "") setError(false);
  }, [input, ProfileDB]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    input === "" && setError(true);

    setDoesExist(false);
    let newObj = Object.assign(ProfileDB, { [input]: {} });
    setProfileDB(newObj);
    localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
    setInput("");
    onClose()
  };

const handleInputChange = (e) => {
    setInput(e.target.value);
    if (ProfileDB.hasOwnProperty(e.target.value)) {
      console.log('Name already exists')
      setDoesExist(true);
      setBtnValid('Invalid')
    } else {
      setDoesExist(false);
      setBtnValid('Submit')
    }
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
          {!isError ? (
            <FormHelperText>
              Please enter a name for the user profile.
            </FormHelperText>
          ) : doesExist ? (
            <FormErrorMessage>This user profile already exists.</FormErrorMessage>
          ) : (
            <FormErrorMessage>
              Please enter a name for the user profile.
            </FormErrorMessage>
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
            {btnValid}
          </Button>
        </FormControl>
      </form>
    </Modal>
  );
}
