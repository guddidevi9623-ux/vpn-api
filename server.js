const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yadav Ji ka REAL AI ONLINE hai! 🤖');
});

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  try {
    const aiRes = await fetch('https://text.pollinations.ai/' + encodeURIComponent(userMessage));
    const aiReply = await aiRes.text();
    res.json({ reply: aiReply });
  } catch (err) {
    res.json({ reply: 'Server thoda busy hai Yadav Ji, 2 sec baad try karo' });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Server running'));
