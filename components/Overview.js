import { Box, Heading, Text } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Overview({ title, body }) {
console.log('data -', title)

   const options = {
     renderText: (text) => {
       return text.split("\n").reduce((children, textSegment, index) => {
         return [...children, index > 0 && <br key={index} />, textSegment];
       }, []);
     },
   };

  return (
    <Box px='8' py='12' maxW='3xl' mx='auto'>
      <Heading textAlign='center'>{title}</Heading>
     
      <Box mt='8' letterSpacing='1px' fontSize='lg'>
        {documentToReactComponents(body, options)}
      </Box>
    </Box>
  );
}

export default Overview;
