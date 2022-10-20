import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ShortVideosCard from "../components/ShortVideosCard";

function ShortVideos() {
  return (
    <Box py='12' px='4' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>SHORT VIDEOS</Heading>
      <Text textAlign='center' fontSize='sm' maxW='xs' mx='auto'>
        presented by 2022/23 contestants for audition.
      </Text>

      <SimpleGrid columns={[1, 2, 2, 3]} spacing='40px' py={[8, 20]}>
        <ShortVideosCard />
        <ShortVideosCard />
        <ShortVideosCard />
      </SimpleGrid>
    </Box>
  );
}

export default ShortVideos;
