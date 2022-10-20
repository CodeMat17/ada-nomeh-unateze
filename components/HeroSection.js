import {
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { TbClick } from "react-icons/tb";

function HeroSection() {
  return (
    <Box pt={[8, 12, 20]} maxW='6xl' mx='auto' minH='96'>
      <Flex
        align='center'
        justify='space-around'
        rowGap={[4, 8]}
        columnGap='0'
        pos='relative'
        flexDir={["column", "column", "row-reverse"]}>
        <Box
          pos='relative'
          shadow='dark-lg'
          rounded='full'
          w={["350px", "400px"]}
          mx='auto'
          h={["350", "400px"]}>
          <Image
            alt='beauty queens'
            src='/heroins.webp'
            priority
            layout='fill'
            objectFit='cover'
          />
          <Text
            letterSpacing='1px'
            pos='absolute'
            display={{ md: "none" }}
            right='0'
            top='-10'
            fontFamily='font1'
            fontSize='6xl'
            color='red'>
            Welcome to
          </Text>
          <Circle
            pos='absolute'
            w='48px'
            h='48px'
            bg='yellow'
            filter='auto'
            blur='lg'
          />
          <Circle
            zIndex='20'
            pos='absolute'
            w='40px'
            h='40px'
            bg='yellow'
            filter='auto'
            blur='sm'
          />
          <Circle
            pos='absolute'
            left='6'
            w='40px'
            h='40px'
            bg='tomato'
            filter='auto'
            blur='lg'
          />
          <Circle
            pos='absolute'
            right='0'
            bottom='0'
            w='96px'
            h='96px'
            bg='green'
            filter='auto'
            blur='xl'
          />
          <Text
            pos='absolute'
            right='0'
            bottom='4'
            color='tomato'
            filter='auto'
            blur=''
            fontSize='3xl'>
            •°•❀•°•
          </Text>
        </Box>

        <VStack px={[6, 6, 6, 6, 0]} align={["center", "center", "start"]}>
          <Text
            letterSpacing='1px'
            display={{ base: "none", md: "flex" }}
            right='0'
            fontFamily='font1'
            fontSize='6xl'
            color='red'>
            Welcome to
          </Text>

          <Heading
            maxW={["md", "md", "md", "xl"]}
            mx='auto'
            textAlign={["center", "center", "start"]}
            size={["3xl"]}
            bgGradient='linear(to-l, #7928CA, orange)'
            bgClip='text'>
            ADA NOMEH UNATEZE
          </Heading>

          <Text
            // textAlign='center'
            fontFamily='font1'
            fontSize='5xl'
            color='red'>
            Beauty Pageant
          </Text>

          <Box pt='8' pb='16'>
            <Button
              rightIcon={<TbClick />}
              letterSpacing='1px'
              size='lg'
              bgGradient='linear(to-r,  yellow.500, purple.500)'
              color='gray.100'
              _hover={{ bgGradient: "linear(to-r,  purple.500, yellow.500)" }}>
              {/* APPLICATION FORM */}
              2022 / 2023
            </Button>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
}

export default HeroSection;
