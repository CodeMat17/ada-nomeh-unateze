import { AspectRatio, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

function PastWinnersCard({ title, name, image, occupation, village, age }) {
  return (
    <Box rounded='lg' w='300px' overflow='hidden' shadow='2xl' mx='auto'>
      <Box pos='relative' w={["100%"]} h='300px'>
        <AspectRatio ratio={1 / 1}>
          <Image
            alt='winner'
            src={image}
            priority
            layout='fill'
            objectFit='cover'
          />
        </AspectRatio>
      </Box>
      <Box px='4' py='2' fontSize='sm'>
        <Text fontWeight='semibold'>{title}</Text>
        <Text noOfLines='1'>Name: {name}</Text>
        <Text noOfLines='1'>Village: {village}</Text>
        <Text noOfLines='1'>Age: {age} as @ event year</Text>
        <Text noOfLines='1'>Occupation: {occupation}</Text>
      </Box>
    </Box>
  );
}

export default PastWinnersCard;
