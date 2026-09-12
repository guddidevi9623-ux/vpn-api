const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yadav Ji ka AI Server ONLINE hai! 🚀');
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message || "Hello";
  // Yahan tum free AI ka reply bhej sakte ho
  res.json({ reply: `Aapne bola: "${userMessage}" - Mai Yadav Ji ka AI hu, ab ONLINE hu!` });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('AI Server Started'));
