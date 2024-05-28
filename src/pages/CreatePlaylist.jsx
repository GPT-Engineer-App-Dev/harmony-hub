import { useState } from "react";
import { Container, Heading, Input, Button, VStack, HStack, Box, Text } from "@chakra-ui/react";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);

  const handleAddSong = () => {
    if (song) {
      setSongs([...songs, song]);
      setSong("");
    }
  };

  const handleSavePlaylist = () => {
    if (playlistName && songs.length > 0) {
      console.log("Playlist saved:", { playlistName, songs });
      // Reset form
      setPlaylistName("");
      setSongs([]);
    }
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        <Heading as="h2" size="xl">Create a New Playlist</Heading>
        <Input
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <HStack w="100%">
          <Input
            placeholder="Add a song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
          />
          <Button onClick={handleAddSong} colorScheme="teal">Add Song</Button>
        </HStack>
        <Box w="100%">
          {songs.length > 0 && (
            <VStack align="start" spacing={2} mt={4}>
              <Heading as="h3" size="md">Songs:</Heading>
              {songs.map((song, index) => (
                <Text key={index}>{song}</Text>
              ))}
            </VStack>
          )}
        </Box>
        <Button onClick={handleSavePlaylist} colorScheme="teal" size="lg" mt={6}>
          Save Playlist
        </Button>
      </VStack>
    </Container>
  );
};

export default CreatePlaylist;