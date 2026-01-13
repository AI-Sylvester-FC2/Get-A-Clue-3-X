import app from './app.js';


const PORT = process.env.PORT || 3001;



// Make sure server is listening on port...
app.listen(PORT, () => {
  console.log(`Now Listening on port: ${PORT}`);
});
