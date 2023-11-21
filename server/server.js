
const axios = require('./node_modules/axios/lib/axios.js');
const app = require('./node_modules/express/index.js');
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(app.json());

// Define an endpoint to receive requests from Teddy
app.post('/teddy', async (req, res) => {
  try {
    // Extract the request data from Teddy
    const { requestData } = req.body;

    // Make a request to Lauren's API
    const laurenResponse = await axios.post('http://localhost:3000/lauren', {
      requestData,
    });

    // Extract and send back the response from Lauren to Teddy
    const responseData = laurenResponse.data;
    res.json({ responseData });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API server is running on port ${port}`);
});
