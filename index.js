import Express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre', (req, res) => {
  res.send('Bem vindo a página sobre!')
});

app.listen(3000, () => {
  console.log('servidor escutando na porta 3000');
})