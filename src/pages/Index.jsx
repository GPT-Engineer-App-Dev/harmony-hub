import { Container, Text, VStack, Heading, Box, Button, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to MusicStream</Heading>
        <Text fontSize="lg" textAlign="center">Discover and stream your favorite music anytime, anywhere.</Text>
        <Box boxSize="sm" mt={6}>
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" mt={6} rightIcon={<FaPlay />}>
          Start Listening
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;