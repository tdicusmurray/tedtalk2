import React, { useState, useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'TeddyTalk'; // Change the page title
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate an API request (replace with your actual API call)
      const response = await fetch('https://api.example.com/your-endpoint', {
        method: 'POST',
        body: JSON.stringify({ input }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOutput(data.output);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Error:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <h1>Enhanced React App</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter something..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>Output: {output}</p>
      )}
    </div>
  );
}

export default App;