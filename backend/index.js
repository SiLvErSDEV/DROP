// my-app-backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const clientsRouter = require('./routes/clients');
const usersRouter = require('./routes/users');
const creditosRouter = require('./routes/creditos');
const authRouter = require('./routes/auth');
const emprendedorRouter = require('./routes/emprendedor');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/clients', clientsRouter);
app.use('/users', usersRouter);
app.use('/creditos', creditosRouter);
app.use('/auth', authRouter);
app.use('/emprendedor', emprendedorRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
