import { Box, Heading, Text } from "@chakra-ui/react";

function Overview() {
  return (
    <Box px='8' py='12' maxW='3xl' mx='auto'>
      <Heading textAlign='center'>OVERVIEW</Heading>
      <Text mt='6' letterSpacing='1px' fontSize='lg'>
        Nomeh Unateze Beauty Pageant is an annual pageant show that is aimed at
        showcasing the community, its talents and the positive attributes of a
        typical Nomeh girl.
      </Text>

      <Text mt='4' letterSpacing='1px' fontSize='lg'>
       The pageantry is aimed at promoting peace, unity and
        progress in the community of Nomeh Unateze.
      </Text>
    </Box>
  );
}

export default Overview;
