import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import JourneyCard from "./JourneyCard";

function PastWinners() {

  const card = [
    {
      id: 1,
      img: "/svg/past-winners.svg",
      title: "PAST WINNERS",
      link: "/past-winners",
    },
    {
      id: 2,
      img: "/svg/current-contestants.svg",
      title: "CURRENT CONTESTANTS",
      link: "/current-contestants",
    },
  ];

  return (
    <Box px='4' py='12' maxW='3xl' mx='auto'>
      <Heading mb='12' textAlign='center'>
        OUR JOURNEY SO FAR
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} spacing='40px'>
        {card.map((item) => (
          <JourneyCard key={item.id} {...item} />
        ))}
      </SimpleGrid>

      {/* <SimpleGrid mt='12' columns={[1, 1, 2, 3]} spacing='20px'>
        {winners.map((winner) => (
          <PastWinnersCard key={winner.id} {...winner} />
        ))}
      </SimpleGrid> */}
    </Box>
  );
}

export default PastWinners;
