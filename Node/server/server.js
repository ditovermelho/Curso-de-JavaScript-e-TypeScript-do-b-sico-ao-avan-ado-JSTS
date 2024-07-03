require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log("Conectei á base de dados.");
        app.emit("pronto");
    })
    .catch( e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));

//IQSN5XIPF6WgfUP+D2cjKsgO fVit Vlvt vItf Flvt iqs5PiX c8()
//new MongoStore({mongooseConnection: mongoose.connection})
//MongoStore.create({ mongoUrl: process.env.MONGO_CONNECTION_URL })
const sessionOptions = session({
    secret: 'akasdfj0ú23453456+54qt23qv qwf qwer qwer qwer asdasdasda a6()',
    store: MongoStore.create({ 
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on("pronto", () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
})
