import { IconButton } from '@chakra-ui/react';

import { MdOutlineMarkEmailRead } from 'react-icons/md';

function EmailLink() {
  return (
    <IconButton
      as='a'
      href='mailto:adanomehunateze@gmail.com'
      color='tomato'
      icon={<MdOutlineMarkEmailRead size={23} />}
      isRound
    />
  );
}

export default EmailLink