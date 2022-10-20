import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import BannerCard from "../components/BannerCard";

function contestants() {
  const title = "CONTESTANTS";
  const url = "/banner.webp";

  return (
    <Box w='100%'>
      <BannerCard title={title} url={url} />
      <Text textAlign='center' fontSize='sm'>
        2022/23
      </Text>
      <Box px='8' pt='20' pb='32' maxW='6xl' mx='auto'>
        {/* <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='20px'>
        <ContestantsCard />
      </SimpleGrid> */}
        <VStack mt='' color='gray'>
          <Spinner />
          <Text mt='2' fontWeight='semibold' fontSize='lg' letterSpacing='1px'>
            Coming soon!!!
          </Text>
        </VStack>
      </Box>
    </Box>
  );
}

export default contestants;
