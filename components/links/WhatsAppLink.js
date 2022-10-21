import { IconButton } from '@chakra-ui/react';

import { BsWhatsapp } from 'react-icons/bs';

function WhatsAppLink() {
  return (
    <IconButton
      as='a'
      href='https://wa.me/+2348130155308'
      target='_blank'
      color='green'
      icon={<BsWhatsapp size={23} />}
      isRound
    />
  );
}

export default WhatsAppLink