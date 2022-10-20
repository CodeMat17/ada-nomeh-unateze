import {Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, IconButton, useColorModeValue, useDisclosure, VStack} from '@chakra-ui/react'
import { HiMenuAlt3 } from 'react-icons/hi';
import {menuList} from '../menuData'

function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
            <VStack mt='20'>
              {menuList.map((list) => (
                <Button w='100%'
                  color={linkColor}
                  _hover={{
                    bgGradient: "linear(to-r, transparent, transparent, yellow.600)",
                    color: "gray.400",
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default MobileMenu