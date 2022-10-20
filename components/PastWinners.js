import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import PastWinnersCard from "./PastWinnersCard";
import {useRouter} from 'next/router'

function PastWinners() {
const router = useRouter()

  const winners = [
    {
      id: 1,
      title: "Maiden Edition Winner, 2020",
      image: "/girls.webp",
      name: "XXXXXXX XXXXXXX",
      occupation: "XXXXXXX XXXXXXX",
      other: "XXXXXXX XXXXXXX",
      blur: '',
    },
    {
      id: 2,
      title: "Second Edition Winner, 2021",
      image: "/girls.webp",
      name: "XXXXXXX XXXXXXX",
      occupation: "XXXXXXX XXXXXXX",
      other: "XXXXXXX XXXXXXX",
      blur: '',
    },
    {
      id: 3,
      title: "Third Edition Winner",
      image: "/girls.webp",
      name: "?????????? ??????????",
      occupation: "??????? ?????????",
      other: "?????????? ???????",
      blur: 'lg',
    },
  ];

  return (
    <Box px='4' py='12' maxW='6xl' mx='auto'>
      <Heading textAlign='center'>PAST WINNERS</Heading>
      <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='20px'>
        {winners.map((winner) => (
          <PastWinnersCard key={winner.id} {...winner} />
        ))}
      </SimpleGrid>
      <Center mt='20'>
        <Box onClick={() => router.push('/contestants')}
          as='button'
          p='4'
          color='white'
          fontWeight='bold'
          borderRadius='md'
          bgGradient='linear(to-r, teal.500, green.500)'
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}>
          SEE 2022/23 CONTESTANTS
        </Box>
      </Center>
    </Box>
  );
}

export default PastWinners;
