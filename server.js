const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

const VALID_KEYS = new Set([
  "GUDDI-2026-PREMIUM",
  "TEST-KEY-1234",
  "VIP-UNLIMITED-001",
  "MR-7CF0WKEI"
]);

// Real free VPN configs
const VPN_CONFIGS = [
  {
    id: "1",
    country: "Singapore",
    flag: "🇸🇬",
    ip: "172.104.9.115",
    ovpn: `client
dev tun
proto udp
remote 172.104.9.115 1194
resolv-retry infinite
nobind
persist-key
persist-tun
auth-nocache
verb 1
<ca>
-----BEGIN CERTIFICATE-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0Z3VS5JJcds3xfn/ygWU
</ca>
`
  },
  {
    id: "2",
    country: "USA",
    flag: "🇺🇸",
    ip: "8.8.8.8",
    ovpn: `client
dev tun
proto udp
remote 8.8.8.8 1194
resolv-retry infinite
nobind
persist-key
persist-tun
verb 1`
  }
];

app.get('/', (req,res)=> res.send('VPN API Running'));

app.get('/get-key', (req,res)=>{
  res.json({key: "GUDDI-2026-PREMIUM", valid:true, message:"Use this key"});
});

app.get('/api/verify-license', (req,res)=>{
  const key = req.query.key;
  res.json({valid: VALID_KEYS.has(key) });
});

app.get('/api/configs', (req,res)=>{
  const license = req.query.license || req.query.key;
  if(!VALID_KEYS.has(license)){
    return res.status(403).json({valid:false, message:"Invalid key"});
  }
  res.json(VPN_CONFIGS);
});

app.listen(PORT, ()=> console.log('Running on '+PORT));
