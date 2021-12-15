const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3001;
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(cors());
app.use('/home', express.static(path.join(__dirname, '../client/dist')));
//don't forget to add '/home' back to the previous line before commiting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
})
