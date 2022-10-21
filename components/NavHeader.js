import { Box, Flex, HStack, IconButton, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import ColorModeToggleBtn from "./ColorModeToggleBtn";
import DesktopMenu from "./DesktopMenu";
import Logo from "./links/Logo";
import MobileMenu from "./MobileMenu";

function NavHeader() {
   const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box as='nav' pos='sticky' top='0' zIndex='60' bg={bg} px='4' py='3'>
      <Flex maxW='6xl' mx='auto' align='center' justify='space-between'>
      <Logo />
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
