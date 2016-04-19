require('dotenv').config({ silent: true });

import express from 'express';
const app = express();

app.use(express.static( __dirname + '/public' ));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
