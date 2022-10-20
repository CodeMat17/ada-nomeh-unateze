import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import BannerCard from "../components/BannerCard";

function About() {
  const title = 'ABOUT US'
  const url = '/about_banner.webp'

  return (
    <Box>
      <BannerCard title={title} url={url} />

      <Box px='4' pt='' pb='40' maxW='3xl' mx='auto'>
        {/* <Heading textAlign='center'>ABOUT US</Heading> */}
        <Text mt='12'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora cum
          distinctio, fugit illo pariatur, animi facilis provident magni ad est
          id debitis! Fugiat iste fugit suscipit laboriosam sapiente inventore
          numquam, rerum eos eaque, esse est perferendis nesciunt unde ipsa
          expedita sit odio error, accusamus cumque id. Aspernatur autem
          sapiente quas doloribus in nostrum nesciunt minima debitis laborum
          iure, dolorum provident explicabo cupiditate tempore facilis illo ex
          sunt ea? Ipsum, itaque.
        </Text>
      </Box>
    </Box>
  );
}

export default About;
