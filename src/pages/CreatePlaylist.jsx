import { useState, useRef } from "react";
import { Container, Heading, Input, Button, VStack, HStack, Box, Text, Progress } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const CreatePlaylist = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [song, setSong] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

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

  const handlePlaySong = (song) => {
    if (audioRef.current) {
      audioRef.current.src = song;
      audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handlePauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleStopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setProgress(0);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
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
                <HStack key={index} w="100%" justifyContent="space-between">
                  <Text>{song}</Text>
                  <HStack>
                    <Button onClick={() => handlePlaySong(song)} colorScheme="teal" size="sm" leftIcon={<FaPlay />}>Play</Button>
                    <Button onClick={handlePauseSong} colorScheme="yellow" size="sm" leftIcon={<FaPause />}>Pause</Button>
                    <Button onClick={handleStopSong} colorScheme="red" size="sm" leftIcon={<FaStop />}>Stop</Button>
                  </HStack>
                </HStack>
              ))}
            </VStack>
          )}
        </Box>
        {currentSong && (
          <Box w="100%" mt={4}>
            <Text>Now Playing: {currentSong}</Text>
            <Progress value={progress} size="sm" colorScheme="teal" />
          </Box>
        )}
        <Button onClick={handleSavePlaylist} colorScheme="teal" size="lg" mt={6}>
          Save Playlist
        </Button>
      </VStack>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </Container>
  );
};

export default CreatePlaylist;