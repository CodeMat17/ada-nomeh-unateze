import { Box, Button, HStack, useColorModeValue } from "@chakra-ui/react";
import { menuList } from "../menuData";

function DesktopMenu() {
  const linkColor = useColorModeValue("gray.800", "gray.300");

  return (
    <Box display={{ base: "none", lg: "flex" }}>
      <HStack spacing='0'>
        {menuList.map((list) => (
          <Button
            color={linkColor}
            _hover={{

              color: "yellow.600",
              transform: "translateY(-5px)",
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
      </HStack>
    </Box>
  );
}

export default DesktopMenu;
