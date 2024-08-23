
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from '@chakra-ui/react';
import supabase from './supabaseClient';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("ts");

    
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }]);

    if (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      await fetch('https://chakratestbackend-production.up.railway.app/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (

    <div className='ts'>

    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
       
      w="100%"
    >
      <Box
        w="100%"
        p={4}
        borderWidth={1}
        borderRadius="md"
       
        boxShadow="md"
        maxW="500px"  
      >
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={4}>
            <FormLabel>Name</FormLabel>


            <Input
            type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
            />



          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
          />
          </FormControl>
          <FormControl isRequired mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
             value={message}
            onChange={(e) => setMessage(e.target.value)}
           />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
    </div>
  );
}

export default App;






 