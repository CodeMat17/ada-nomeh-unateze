import { HStack, Spinner, Text, VStack } from "@chakra-ui/react";

const PageLoader = () => {
  return (
    <VStack pt='48'>
      <HStack>
        <Spinner  size='lg'/>
        <Text letterSpacing='1px' fontSize='lg'>Please wait...</Text>
      </HStack>
    </VStack>
  );
};

export default PageLoader;
