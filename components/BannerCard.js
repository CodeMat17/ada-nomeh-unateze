import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";

function BannerCard({ title, url }) {
  return (
    <Box pos='relative' w='100%' h={["100px", "130px"]}>
      <Image
        alt='banner'
        src={url}
        priority
        layout='fill'
        objectFit='fill'
      />
      <Heading
        size={["2xl"]}
        pos='absolute'
        right={[4, 8, 16]}
        // left='0'
        top={[8, 12, 16]}
        textAlign='center'
        color='white'>
        {title}
      </Heading>
    </Box>
  );
}

export default BannerCard;
