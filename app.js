const  express = require('express') // yarn add express
const router = require('./Route/index.js')

const app = express();

app.use(router)
app.listen({ port: 4000 });

console.log('Listening to port 4000');