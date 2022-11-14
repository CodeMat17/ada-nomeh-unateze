import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import AdaCard from "../components/AdaCard";
import BannerCard from "../components/BannerCard";
import { client } from "../contentfulClient";

export const getStaticProps = async () => {
  const currentcontestants = await client.getEntries({
    content_type: "currentContestants",
    order: "sys.createdAt",
  });

  return {
    props: {
      currentcontestants: currentcontestants.items,
    },
  };
};

function contestants({ currentcontestants }) {
  const title = "CONTESTANTS";
  const url = "/banner.webp";

  if (!currentcontestants || currentcontestants.length <= 0) {
    return (
      <Text textAlign='center' py='48' fontSize='2xl' fontWeight='bold'>
        Coming Soon!
      </Text>
    );
  }

  return (
    <Box maxW='6xl' mx='auto'>
      <BannerCard title={title} url={url} />
      <SimpleGrid py='20' columns={[1, 1, 2, 3]} spacing='40px'>
        {currentcontestants &&
          currentcontestants.map((item) => (
            <AdaCard
              key={item.sys.id}
              image={item.fields.image}
              name={item.fields.name}
              occupation={item.fields.occupation}
              village={item.fields.village}
              age={item.fields.age}
              videolink={item.fields.videolink}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default contestants;
