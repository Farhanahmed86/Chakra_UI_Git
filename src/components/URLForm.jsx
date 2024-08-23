 
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
 
import { nanoid } from 'nanoid';
import supabase from '../supabaseClient';

function URLForm({ setShortUrl }) {
  const [originalUrl, setOriginalUrl] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const shortCode = nanoid(6); // Generates a 6-character unique shortcode

    const { data, error } = await supabase
      .from('messages')
      .insert([{ original_url: originalUrl, short_code: shortCode, clicks: 0 }]);

    if (error) {
      toast({
        title: 'Error',
        description: 'Could not shorten the URL.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } else {
      setShortUrl(`${window.location.origin}/${shortCode}`);
      toast({
        title: 'URL Shortened',
        description: 'Your short URL has been created!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={6}>
      <FormControl mb={4} isRequired>
        <FormLabel>Original URL</FormLabel>
        <Input
          placeholder="Enter your URL here"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="teal" type="submit" width="full">
        Shorten URL
      </Button>
    </Box>
  );
}

export default URLForm;
