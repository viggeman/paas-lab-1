const express = require('express');
const cors = require('cors'); // Importera cors-paketet
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api', (_request, response) => {
  console.log('API-förfrågan mottagen!');
  response.send({ hello: 'World' });
});

// Servera statiska filer från Next.js 'dist'-mapp (mer om detta senare)
app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
