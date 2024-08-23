 
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
 
import { Text } from '@chakra-ui/react';
import supabase from '../supabaseClient';

function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToOriginal = async () => {
      const { data } = await supabase
        .from('messages')
        .select('original_url, clicks')
        .eq('short_code', shortCode)
        .single();

      if (data) {
      
        await supabase
          .from('messages')
          .update({ clicks: data.clicks + 1 })
          .eq('short_code', shortCode);

        window.location.href = data.original_url;
      } else {
        navigate('/');
      }
    };

    redirectToOriginal();
  }, [shortCode, navigate]);

  return <Text>Redirecting...</Text>;
}

export default RedirectPage;
