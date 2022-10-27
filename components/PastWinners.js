import { Box, Button, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import PastWinnersCard from "./PastWinnersCard";
import {useRouter} from 'next/router'

function PastWinners() {
const router = useRouter()

  const winners = [
    {
      id: 1,
      title: "1st Ada Nomeh Unateze, 2020/2021",
      image: "/ada/chioma.webp",
      name: "Ede Chioma Stephanie",
      village: "Amaigbo",
      age: "23",
      occupation: "Make-up Artist",
    },
    {
      id: 2,
      title: "1st Face of Nomeh Unateze, 2020/2021",
      image: "/ada/chidinma.webp",
      name: "Egbo Queendaline Chidinma",
      village: "Imeama",
      age: "20",
      occupation: "Student",
    },
    {
      id: 3,
      title: "1st Ada Nomeh Unateze Top Model, 2020/2021",
      image: "/ada/chinonso.webp",
      name: "Okonkwo Chinonso Rebecca",
      village: "Amukabi",
      age: "20",
      occupation: "Student",
    },
    {
      id: 4,
      title: "2nd Ada Nomeh unateze 2022/2023",
      image: "/ada/miracle.webp",
      name: "Mkpume Miracle Chidiogo",
      village: "Imeama",
      age: "22",
      occupation: "Self Employed",
    },
    {
      id: 5,
      title: "Face of Nomeh unateze 2022/2023",
      image: "/ada/chinaza.webp",
      name: "Nwankwo Chinaza Emmanuella",
      village: "Amaigbo",
      age: "18",
      occupation: "Nursing",
    },
    {
      id: 6,
      title: "Ada Nomeh Unateze Top Model, 2022/2023",
      image: "/ada/gift.webp",
      name: "Nworie Onyinyechukwu Gift",
      village: "Imeama",
      age: "19",
      occupation: "Self Employed",
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
