import { AspectRatio, Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { HiPlay } from "react-icons/hi";

function ShortVideosCard() {
    return (
      <Box>
        <Box  shadow='md' maxW='350px' rounded='xl'>
          <Box px='2' rounded='lg' overflow='hidden'>
            <AspectRatio maxW='350px' ratio={4 / 3}>
              {/* <iframe
                title='naruto'
                src="https://www.facebook.com/plugins/video.php?height=200&href=https%3A%2F%2Fweb.facebook.com%2FNomehUnatezeBeautyPageant%2Fvideos%2F603422467656520%2F&show_text=false&width=238&t=0"
                allowFullScreen
              /> */}
              <HStack>
                <Text>COMING SOON!!!</Text>
                <IconButton
                  icon={<HiPlay size={32} color='red' />}
                  isRound
                  size='lg'
                />
              </HStack>
            </AspectRatio>
          </Box>
          {/* <Box p='2'>
            <Text fontSize='sm'>Name: xxxxxxxxx xxxxxxxxx</Text>
          </Box> */}
        </Box>
      </Box>
    );
}

export default ShortVideosCard;
