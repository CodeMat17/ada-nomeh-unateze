import {
  Box,
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";

function ApllicationForm() {
  return (
    <Box px='4' py='12'>
      <Heading textAlign='center'>APPLICATION FORM</Heading>
      <Text
        textAlign='center'
        py='4'
        maxW='md'
        mx='auto'
        color='gray'
        fontSize='sm'>
        Ada Nomeh 2022/23 is open for the Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorem ex assumenda corrupti nemo, magni dicta.
      </Text>
      <chakra.form mt='6' maxW='md' mx='auto'>
        <FormControl isRequired={true} mb='4'>
          <FormLabel mb='0'>Name</FormLabel>
          <Input placeholder='Enter your name' />
        </FormControl>
        <FormControl isRequired={true} mb='4'>
          <FormLabel mb='0'>XXXXX</FormLabel>
          <Input placeholder='Enter your XXXXX' />
        </FormControl>
        <FormControl isRequired={true} mb='4'>
          <FormLabel mb='0'>XXXXX</FormLabel>
          <Input placeholder='Enter your XXXXX' />
        </FormControl>
        <FormControl isRequired={true} mb='4'>
          <FormLabel mb='0'>XXXXX</FormLabel>
          <Input placeholder='Enter your XXXXX' />
        </FormControl>
        <Button w='100%' size='lg' colorScheme='purple'>
          APPLY
        </Button>
      </chakra.form>
    </Box>
  );
}

export default ApllicationForm;
