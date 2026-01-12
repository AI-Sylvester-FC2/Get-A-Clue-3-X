import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const PORT = 3000;

// creating file structure
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

// serving static files
app.use(express.static(_dirname));

// serving HTML file 
app.get('/', (req, res) => {
  res.sendFile(_dirname, '/index.html');
});

// Make sure server is listening on port...
app.listen(PORT, () => {
  console.log(`Now Listening on port: ${PORT}`);
});
