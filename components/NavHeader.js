import { Box, Flex, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import ColorModeToggleBtn from "./ColorModeToggleBtn";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function NavHeader() {
   const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box as='nav' pos='sticky' top='0' zIndex='60' bg={bg} px='4' py='3'>
      <Flex maxW='6xl' mx='auto' align='center' justify='space-between'>
        <Box
          p='0.5'
          bgGradient='linear(to-r, purple.500, yellow.500)'
          rounded='full'>
          <Box pos='relative' w={10} h={10} rounded='full' overflow='hidden'>
            <Image
              alt='logo'
              src='/logo.webp'
              layout='fill'
              priority
              objectFit='contain'
            />
          </Box>
        </Box>
        <HStack spacing='4'>
          <ColorModeToggleBtn />
          <MobileMenu />
          <DesktopMenu />
        </HStack>
      </Flex>
      {/* <Flex mt='2' maxW='6xl' mx='auto' justify='center'>
        <DesktopMenu />
      </Flex> */}
    </Box>
  );
}

export default NavHeader;
