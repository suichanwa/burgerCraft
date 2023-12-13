import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});


export default app;
