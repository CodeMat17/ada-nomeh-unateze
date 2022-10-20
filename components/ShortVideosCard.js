import { AspectRatio, Box, Text } from "@chakra-ui/react";

function ShortVideosCard() {
    return (
      <Box>
        <Box shadow='md' maxW='350px'>
          <Box rounded='md' overflow='hidden'>
            <AspectRatio maxW='350px' ratio={4 / 3}>
              <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
              />
            </AspectRatio>
          </Box>
          <Box p='2'>
            <Text fontSize='sm'>Name: xxxxxxxxx xxxxxxxxx</Text>
          </Box>
        </Box>
      </Box>
    );
}

export default ShortVideosCard;
