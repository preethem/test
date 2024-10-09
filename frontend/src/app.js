import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Flask API
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React Front-End</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
