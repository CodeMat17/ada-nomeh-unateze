import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function PastWinnersCard({ title, name, image, occupation, other, blur }) {
  return (
    <Box border='1p' rounded='lg' w='280px' overflow='hidden' shadow='2xl' mx='auto'>
      <Box filter='auto' blur={blur} pos='relative' w={["100%"]} h='350px'>
        <Image
          alt='winner'
          src={image}
          priority
          layout='fill'
          objectFit='contain'
        />
      </Box>
      <Box p='4' fontSize='sm'>
        <Text fontWeight='semibold'>
          {title}
        </Text>
        <Text noOfLines='1'>Name: {name}</Text>
        <Text noOfLines='1'>Occupation: {occupation}</Text>
        <Text noOfLines='1' >Other Info: {other}</Text>
      </Box>
    </Box>
  );
}

export default PastWinnersCard;
