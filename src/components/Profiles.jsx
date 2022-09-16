import { VStack, StackDivider, Heading } from "@chakra-ui/react";
import Profile from "./Profile";

export default function Profiles({ProfileDB}) {
  return (
    <div style={{ textAlign: "center" }}>
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
          <Profile name={user_name} key={user_name} />
        ))}
      </VStack>
    </div>
  );
}
