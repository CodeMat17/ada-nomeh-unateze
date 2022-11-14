import { Box, SimpleGrid } from "@chakra-ui/react";
import AdaCard from "../components/AdaCard";
import BannerCard from "../components/BannerCard";
import { client } from "../contentfulClient";

export const getStaticProps = async () => {
  const pastwinners = await client.getEntries({
    content_type: "pastWinners",
    order: "sys.createdAt",
  });

  return {
    props: {
      pastwinners: pastwinners.items,
    },
  };
};

function winners({ pastwinners }) {
  const title = "PAST WINNERS";
  const url = "/banner.webp";

  return (
    <Box maxW='6xl' mx='auto'>
      <BannerCard title={title} url={url} />
      <SimpleGrid py='20' columns={[1, 1, 2, 3]} spacing='40px'>
        {pastwinners &&
          pastwinners.map((item) => (
            <AdaCard
              key={item.sys.id}
              image={item.fields.image}
              name={item.fields.name}
              position={item.fields.position}
              village={item.fields.village}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default winners;
