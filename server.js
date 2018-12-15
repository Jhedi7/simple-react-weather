const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
  res.send('PORT 5000');
});

// app.get('/weather', (req, res) => {
//   res.send({ express: 'React and Express are connected!' });
// });










app.listen(port, () => console.log(`Listening on port... ${port}`));