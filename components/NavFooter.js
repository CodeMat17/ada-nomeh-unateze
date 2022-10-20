import {
  Box,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";

function NavFooter() {
  const iconColor = useColorModeValue("gray.800", "gray.400");

  return (
    <Box w='100%' bg='gray.900' px='4' py='12' color='gray.300'>
      <Box maxW='6xl' mx='auto'>
        <HStack align='start' justify='space-between'>
          <Flex flexDir={["column", "row"]} rowGap='8' columnGap='20'>
            <VStack align='start'>
              <Text fontWeight='semibold' fontSize='lg'>
                Contact Us
              </Text>
              <HStack spacing='4'>
                <IconButton
                  as='a'
                  href='mailto:adanomehunateze@gmail.com'
                  color='purple'
                  icon={<MdOutlineMarkEmailRead size={23} />}
                  isRound
                />
                <IconButton
                  as='a'
                  href='https://wa.me/+2348130155308'
                  target='_blank'
                  color='green'
                  icon={<BsWhatsapp size={23} />}
                  isRound
                />
              </HStack>
            </VStack>
            <VStack align='start'>
              <Text fontWeight='semibold' fontSize='lg'>
                Follow Us
              </Text>
              <HStack spacing='4'>
                <IconButton
                  as='a'
                  href='https://www.facebook.com/NomehUnatezeBeautyPageant'
                  target='_blank'
                  color='blue.500'
                  icon={<RiFacebookFill size={23} />}
                  isRound
                />
              </HStack>
            </VStack>
          </Flex>

          <Box
            p='0.5'
            bgGradient='linear(to-r, purple.500, yellow.500)'
            rounded='full'>
            <Box pos='relative' w={16} h={16} rounded='full' overflow='hidden'>
              <Image
                alt='logo'
                src='/logo.webp'
                layout='fill'
                priority
                objectFit='contain'
              />
            </Box>
          </Box>
        </HStack>
        <Divider my='8' />
        <Text fontSize='sm'>
          &copy; 2022 Ada Nomeh Unateze Beauty Pageant, all rights reserved.
        </Text>
        <Text mt='2' fontSize='sm' color='gray'>
          Designed and developed by
          <Link
            isExternal
            color='blue.500'
            href='https://www.soft-lutions.com.ng'>
            Matthew Chukwu
          </Link>
          .
        </Text>
      </Box>
    </Box>
  );
}

export default NavFooter;
