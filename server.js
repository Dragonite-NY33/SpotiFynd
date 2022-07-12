const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = 3005;

const { createServer: createViteServer } = require('vite');

async function createServer(){

  const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.get('/', (req, res) => {
    res.send('hello from express')
})

// const vite = await createViteServer({
//   server: { middlewareMode: 'ssr' }
// })
// // use vite's connect instance as middleware
// app.use(vite.middlewares)

// app.use('*', async (req, res) => {
//   // serve index.html - we will tackle this next
// })




/**
 * 404 handler
 */
 app.use('*', (req,res) => {
    res.status(404).send('Not Found');
  });
  
  /**
   * Global error handler
   */
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
  });
  
  app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

}

createServer()

