
// const { getSignedUrl } = require("@aws-sdk/cloudfront-signer");
const express = require('express')
const app = express()
const port = 3000
var cfsign = require('aws-cloudfront-sign');

app.get('/', (req, res) => {
  // We can setup .env file for it to ensure privacy
  let dt = new Date().getTime(); // get current time in ms
  let signingParams = {
  keypairId: "K3220M629ZFPLW",
  // Optional - this can be used as an alternative to privateKeyString
  privateKeyPath: 'private_key.pem',
  expireTime: dt + 300000, // Url is only valid for 5 min = 300000 ms
}

// Generating a signed URL
let signedUrl = cfsign.getSignedUrl(
  'https://d1sylf4hvhahhp.cloudfront.net/image.jpg', 
  signingParams
);

console.log(signedUrl)
  res.send('Home')
})

//Another way to do it 

// app.get('/', (req, res) => {
// // We can setup .env file for it to ensure privacy
// const cloudfrontDistributionDomain = "https://d1sylf4hvhahhp.cloudfront.net";
// const s3ObjectKey = "image.jpg";
// const url = `${cloudfrontDistributionDomain}/${s3ObjectKey}`;
// const privateKey = `-----BEGIN RSA PRIVATE KEY-----
// MIIEowIBAAKCAQEA0QOYMke/LCf/BEa/y4a39+GFoHj4eGwV0pTvBo7k/FbypHBW
// XxgewvvE5v1Bc0jTqDRGwTdfrXO4VuGELPSkl/APPrjy+WAmhRZQSeoLZMsgX2In
// Hau6RURkKm4Qdq5W7tMHRMFXQiNfGEZJqyJwYOidFzThTz9j/BcHcdlcpNCGA00d
// s48UkbXtF8dpVjb1k2QHfrd32DCIRDWNFFUeW0QkiKJ4uIfliwYD4dLsf8Ez0Gvy
// JTPvUEVjtsEh1eZoQVE+r59oKkxMO3eDuyMm/+JkqWDXvmGU47Nh0X/t32hGtNgW
// 4pdCsOZsqQ5otyPGl35wy9ipOWpcrdqLoIhOYwIDAQABAoIBAQC/2KbH7+bfJs8C
// I9ZDf6I4mf3HL4IRNlRJd3517I7ttvj8Skhc/Iyvt9whkO+UW5I639DZ5HOjh4X5
// 6QEjKmIxO50imywaDVEN8086qOJQX8mVA0iYCVnt3jp6X5Ao/xi4GWagiz4GbOUK
// KOnRdMjlil02QclUrgCeEJ06uKI6e6rOujmUv47SzKo5366k9u3A5B33Vc99wBhN
// 7H9Tfuygchx0m1RhDoiUHTqvNCb1MHTVSefd6csWjvejIbUjDprfKmvntve+zWBG
// BZAwhjdLy59avK9diS48vEOsoyA7z5u9rCvrxltOmQVoKTO+LpRX0x/gsvFWp7al
// DVCjl2wRAoGBAO6ItKj1LhvEnpf1FHIzStUdGA9GpRPvO200nUqb0tYn6td4KXwn
// IiQd4UeyKEgtjsNZENWHYJcaDe5LxgKhfB4pbEq1Bbc7frncmDSC2lmW0PDxNwK8
// 4NcjQBtSJdTIB2e54R5pMXIuGJHCSaWYDFodlM2RnP/I2Oy8MMbPThFvAoGBAOBR
// ikzUQ/dwEj8wzZHwyqGMTtnyLSwi1lp9CmKGaDgmjYyZe6Ek+WoWU7/I4wVyzpl3
// l1EvKSCqEPXbFqn22kraEeXMVjKFbRBeY0mk+5zK8kUBvrtIgN6u3QmRgxXryrAP
// P3tQIgHj+na5hwdeglwdjFpcg4qNoV+vDWwxG/BNAoGAUia86a+/WIrn//fFOeuW
// az1g6unusqXi9qJ3RZnTDDSlOd5Fk1+672tnChU+sFUYZQkItjGwv3mWsKpiIMfT
// AmRLypL7y/Zul750oSkr4E0D2ueIhaXdXdrjGkW5h8X4Xu3yrVGXWPatOY4LZT+v
// iV3EwOPUiXd31lieB+qfvXsCgYB0ng+PR58aCVqDHYURxSQi/kWUCtIvKuFTY8Q9
// WnDeGDTojnZ2XTmJTJg3kWFs2LXNlR3GqATypVdx6XeL3vi3h01csXFyjGkZ5Ggr
// xijE58Ex3OlihhvxKOli6xJCGDZkd1jia9NyNiplBKjNTPXqm7X22DfOlTj6/I+2
// 2oUS1QKBgDT6rUWZJKf8FIgRsxL+G2QGguDDmM0L10FB7OaHtasVyd9iIn9rG8Gv
// 4E9wQlGfKf1/dAxVa9VQ3H6MquVr3YGZlRi74ttKxwF1tVrxEXkf1a5GDlgxRKr0
// yigjzGzcSCGBR2ZaG8uDf6LSV53iZK0Vx2Yte/CmmT2AtvX3nctV
// -----END RSA PRIVATE KEY-----`;
// const keyPairId = "K3220M629ZFPLW";
// const expiresIn = "2023-06-15"; // any Date constructor compatible

// const signedUrl = getSignedUrl({
//   url,
//   keyPairId,
//   expiresIn,
//   privateKey,
// });

// console.log(signedUrl)
//   res.send('Home')
// })
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})