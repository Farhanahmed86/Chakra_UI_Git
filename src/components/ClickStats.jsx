
import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
 

function ClickStats() {
  const [clickStats, setClickStats] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClickStats = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
      } else {
        console.log('Fetched data:', data);
        setClickStats(data);
      }
    };

    fetchClickStats();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {clickStats.length > 0 ? (
        clickStats.map((stat) => (
          <div key={stat.id}>
            <p>Original URL: {stat.original_url}</p>
            <p>Short Code: {stat.short_code}</p>
            <p>Clicks: {stat.clicks}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default ClickStats;


 