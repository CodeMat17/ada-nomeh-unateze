import {Box, Button, Text, VStack} from '@chakra-ui/react'
import Image from 'next/image';
import Link from 'next/link';

const JourneyCard = ({img, title, link}) => {
  return (
    <Box
      border='1px'
      borderColor='gray.500'
      shadow='lg'
      rounded='md'
      py='8' px='4'
      w='270px'
      mx='auto'>
      <Box pos='relative' w='150' h='150'>
        <Image
          src={img}
          alt=''
          priority
          layout='fill'
          objectFit='center'
        />
      </Box>
      <Text py='2' fontSize='xl' fontWeight='semibold' textAlign='center'>
       {title}
      </Text>
      <VStack mt='6'>
        <Link href={link}>
          <a>
            <Button colorScheme='purple'>Checkout</Button>
          </a>
        </Link>
      </VStack>
    </Box>
  );
}

export default JourneyCard