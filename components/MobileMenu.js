import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import EmailLink from "../components/links/EmailLink";
import FacebookLink from "../components/links/FacebookLink";
import WhatsAppLink from "../components/links/WhatsAppLink";
import { menuList } from "../menuData";
import Logo from "./links/Logo";

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkColor = useColorModeValue("gray.800", "gray.300");

  return (
    <Box display={{ lg: "none" }}>
      <IconButton
        onClick={onOpen}
        icon={<HiMenuAlt3 size={32} />}
        isRound={true}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex align='center'>
              <Logo />
            </Flex>

            <DrawerHeader pl='0' pt='2' pb='0'>
              Ada Nomeh Unateze
            </DrawerHeader>
            <Text color='gray.400' fontFamily='font1' fontSize='3xl'>
              Beauty Pageant Show
            </Text>
            <Divider my='6' />
            <VStack mt=''>
              {menuList.map((list) => (
                <Button
                  w='100%'
                  color={linkColor}
                  _hover={{

                    color: "yellow.600",
                    transform: "translateX(-5px)",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                    shadow: "md",
                  }}
                  variant='ghost'
                  as='a'
                  key={list.id}
                  href={list.url}>
                  {list.item}
                </Button>
              ))}
            </VStack>
            <Divider my='6' />
            <HStack spacing='6'>
              <FacebookLink />
              <WhatsAppLink />
              <EmailLink />
            </HStack>
            <Divider my='6' />
            <Text mt='2' fontSize='sm' color='gray'>
              Designed and developed by{" "}
              <Link
                isExternal
                color='blue.500'
                href='https://www.soft-lutions.com.ng'>
                Matthew Chukwu
              </Link>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu;
