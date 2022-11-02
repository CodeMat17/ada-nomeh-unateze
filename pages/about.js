import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import BannerCard from "../components/BannerCard";

function About() {
  const title = 'ABOUT US'
  const url = '/about_banner.webp'

  return (
    <Box>
      <BannerCard title={title} url={url} />

      <Box px='8' pt='' pb='40' maxW='3xl' mx='auto' fontSize='lg'>
        {/* <Heading textAlign='center'>ABOUT US</Heading> */}
        <Text mt='20'>
          Nomeh Unateze Beauty Pageant is an annual pageant show that is aimed
          at showcasing the community, its talents and the positive attributes
          of a typical Nomeh girl.
        </Text>

        <Text mt='4'>
          It is a stepping-stone for any maiden of Nomeh extract who has the dream of
          reaching a greater height in the pageant world.
        </Text>

        <Text mt='4'>
          Also, it is a program which main objective is to bring peace, unity and
          progress to the people of Nomeh Unateze.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
