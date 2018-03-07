const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// HTTP request logger middleware for node.js
app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.send("Hello");
});

app.post('/api/login', (req, res) => {
  const user = req.body;
  // token 1小時過期
  const token = jwt.sign({ user, exp: Math.floor(Date.now() / 1000) + (60 * 60)}, 'my_secret_key');
  res.json({
    token: token
  });
});
const ensureToken = (req, res, next) => {
  const bererHeader = req.headers['authorization'];
  if (typeof bererHeader != 'undefined') {
    const bearer = bererHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}
app.get('/api/protected', ensureToken, (req, res) => {
  jwt.verify(req.token, 'my_secret_key', function (err, data) {
    if (err) {
      res.status(401).send(err);
    } else {
      res.json({
        text: 'Protected information. Congrats!',
        data: data
      });
    }
  });
});


app.listen(3030, () => {
  console.log('server started on  port 3030');
});
