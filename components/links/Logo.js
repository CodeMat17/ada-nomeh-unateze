import { Box } from '@chakra-ui/react';
import Image from 'next/image';

function Logo() {
  return (
    <Box as='a' href='/'
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
  );
}

export default Logo