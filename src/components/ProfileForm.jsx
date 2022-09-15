import { useState, useEffect } from "react";
import { Button, Input } from "@chakra-ui/react";
import Modal from "./Modal";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function ProfileForm({ showModal, onClose }) {
  const [input, setInput] = useState("");
  const [isError, setError] = useState(false);
  const [ProfileDB, setProfileDB] = useState({});
  const [doesExist, setExist] = useState(false);
  console.log("ProfileDB inside function, on render:L ", ProfileDB);
  console.log("outside useEffect hook, isError set: ", isError);

  useEffect(() => {
    if (input !== "") setError(false);
  }, [input, ProfileDB]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setError(input === "");

    const ProfileDBtemp = JSON.parse(localStorage.getItem("ProfileDB"));
    console.log("here is ProfileDBtemp: ", ProfileDBtemp);

    if (ProfileDBtemp) {
      setProfileDB(Object.assign(ProfileDB, ProfileDBtemp)); //PREVIOSLY: setProfileDB(ProfileDBtemp);
      console.log("ProfileDB state set to: ", ProfileDB);
    } else localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
    console.log("This is ProfileDB before form submission: ", ProfileDB);

    if (ProfileDB.hasOwnProperty(input)) setExist(true);
    else {
      setExist(false);
      ProfileDB[input] = {};
      console.log("ProfileDB after adding on input to it: ", ProfileDB);
      setProfileDB(ProfileDB);
    }
    localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
    console.log("This is ProfileDB after form submission: ", ProfileDB);

    console.log("form submitted, input value: ", input);
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
