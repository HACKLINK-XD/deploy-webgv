const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/trigger-deploy', async (req, res) => {
  try {
    const response = await axios.post('https://api.render.com/deploy/srv-xxxxxxxxxxxx?key=xxxxxxxx');
    res.status(200).send('Deploy triggered successfully!');
  } catch (error) {
    console.error('Deploy failed:', error.message);
    res.status(500).send('Failed to trigger deploy');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
