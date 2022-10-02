import { VStack, StackDivider, Heading } from "@chakra-ui/react";
import Profile from "./Profile";
import { useState } from "react";

export default function Profiles({ ProfileDB }) {
  const [Profiles, setProfiles] = useState(ProfileDB);
  console.log(
    "this is ProfileDB length inside Profiles: ",
    Object.keys(ProfileDB).length
  );

  const removeProfile = (name) => {
    let ProfilesTemp = Profiles;
    delete ProfilesTemp[name];
    setProfiles(ProfilesTemp);
    console.log(name, " deleted, profiles now: ", Profiles);
    localStorage.setItem("ProfileDB", JSON.stringify(ProfileDB));
  };

  return (
    <div style={{ textAlign: "center" }} key={Object.keys(Profiles).length}>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="stretch"
        border="solid 1px"
        borderColor="blackAlpha.400"
        borderRadius="2rem"
        m={10}
        p="2"
        width="90%"
      >
        <Heading size="lg" fontWeight="semibold">
          User Profiles
        </Heading>
        {Object.keys(ProfileDB).map((user_name) => (
          <Profile
            name={user_name}
            key={user_name}
            ProfileDB={ProfileDB}
            removeProfile={removeProfile}
          />
        ))}
      </VStack>
    </div>
  );
}
