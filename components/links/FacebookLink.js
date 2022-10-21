import { IconButton } from '@chakra-ui/react';
import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';

function FacebookLink() {
  return (
    <IconButton
      as='a'
      href='https://www.facebook.com/NomehUnatezeBeautyPageant'
      target='_blank'
      color='blue.500'
      icon={<RiFacebookFill size={23} />}
      isRound
    />
  );
}

export default FacebookLink