import {Box} from '@chakra-ui/react'
import BannerCard from '../components/BannerCard';
import PastWinners from '../components/PastWinners'

function winners() {
  const title = 'PAST WINNERS'
  const url = '/banner.webp'

  return (
    // hghghh
    <Box>
      <BannerCard title={title} url={url} />
      <Box py='12'>
        <PastWinners />
      </Box>
    </Box>
  );
}

export default winners