 
import React, { useState } from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import URLForm from '../components/URLForm';
import ClickStats from '../components/ClickStats';

function HomePage() {
  const [shortUrl, setShortUrl] = useState('');

  return (
    <Box maxW="600px" mx="auto" mt={10} p={5} borderRadius="md" boxShadow="md" bg="gray.100">
      <Text fontSize="2xl" mb={6} fontWeight="bold" textAlign="center">URL Shortener</Text>
      <URLForm setShortUrl={setShortUrl} />

      {shortUrl && (
        <Box mt={4}>
          <Text>Short URL:</Text>
          <Input value={shortUrl} isReadOnly />
        </Box>
      )}

      <ClickStats />
    </Box>
  );
}

export default HomePage;







 
