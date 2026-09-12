const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Yadav Ji ka AI - 100% Apna Server ONLINE hai! 🚀');
});

// 100% APNA AI - Koi Pollinations nahi
app.post('/chat', (req, res) => {
  const msg = (req.body.message || '').toLowerCase();
  let reply = '';

  if(msg.includes('hello') || msg.includes('hey') || msg.includes('hi')){
    reply = 'Hello Yadav Ji! 🙏 Mai aapke apne server se bol raha hu, 100% aapka khud ka AI!';
  }
  else if(msg.includes('code') || msg.includes('coding')){
    reply = 'Haan Yadav Ji, konsi coding chahiye? \n\n1. HTML\n2. Java\n3. Python\n4. APK Code\n\nBolo kaunsi bana du? Mai aapke server se hi code dunga!';
  }
  else if(msg.includes('html')){
    reply = '<!DOCTYPE html>\n<html>\n<head><title>Yadav AI</title></head>\n<body>\n<h1>Ye code aapke server se aaya hai!</h1>\n</body>\n</html>';
  }
  else if(msg.includes('kaise ho') || msg.includes('kya haal')){
    reply = 'Ekdam mast hu Yadav Ji! Aapke server vpn-api-2.onrender.com pe full speed me chal raha hu!';
  }
  else{
    reply = `Aapne bola: "${req.body.message}"\n\nYe jawab 100% aapke apne server (vpn-api-2.onrender.com) se aaya hai, kisi aur API se nahi! Bolo ispe kya code chahiye?`;
  }

  res.json({ reply: reply });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Apna AI Server Running'));
