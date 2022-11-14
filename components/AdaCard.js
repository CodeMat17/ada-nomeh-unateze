import {
  AspectRatio,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

function AdaCard({
  image,
  name,
  position,
  village,
  age,
  occupation,
  videolink,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box rounded='lg' w='280px' overflow='hidden' shadow='lg' mx='auto'>
      <Box pos='relative' w={["100%"]} h='280px'>
        <AspectRatio ratio={1 / 1}>
          <Image
            alt='winner'
            src={`https:${image.fields.file.url}`}
            priority
            layout='fill'
            objectFit='cover'
          />
        </AspectRatio>
      </Box>
      <Box p='2' fontSize='sm'>
        <Text fontSize='lg' fontWeight='semibold'>
          {position}
        </Text>
        <Text fontSize='lg' noOfLines='1'>
          Name: {name}
        </Text>
        <Text fontSize='lg' noOfLines='1'>
          Village: {village}
        </Text>
        {age && (
          <Text fontSize='lg' noOfLines='1'>
            Age: {age}
          </Text>
        )}
        {occupation && (
          <Text fontSize='lg' noOfLines='1'>
            Occupation: {occupation}
          </Text>
        )}
        {videolink && (
          <VStack pt='4' pb='2'>
            <Button onClick={onOpen}>My audition video</Button>
          </VStack>
        )}
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx='2' maxW='xl'>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={4 / 3}>
              <iframe title={name} src={videolink} allowFullScreen />
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AdaCard;
