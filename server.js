const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let VALID_LICENSES = ["GUDDI-2026-PREMIUM","TEST-KEY-1234","VIP-UNLIMITED-001"];

const configs = [
  { id: 1, country: "Singapore", flag: "🇸🇬", ip: "139.59.101.12", ovpn: "client\nremote 139.59.101.12 1194" },
  { id: 2, country: "USA", flag: "🇺🇸", ip: "104.21.45.67", ovpn: "client\nremote 104.21.45.67 1194" }
];

app.get('/', (req,res)=> res.send('VPN API Running'));

// Apna Key System - ye Bala ka nahi hai, tumhara hai
app.get('/get-key', (req,res)=>{
  const newKey = "MR-" + Math.random().toString(36).substring(2,10).toUpperCase();
  VALID_LICENSES.push(newKey);
  res.json({ key: newKey, valid: true, message: "New Key Generated" });
});

app.get('/api/verify-license', (req,res)=>{
  const isValid = VALID_LICENSES.includes(req.query.key);
  res.json({ valid: isValid });
});

app.get('/api/configs', (req,res)=>{
  if(!VALID_LICENSES.includes(req.query.license)){
    return res.status(403).json({ error: "Invalid License Key" });
  }
  res.json(configs);
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=> console.log('API ON'));
