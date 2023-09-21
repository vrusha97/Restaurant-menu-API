const  express = require('express') // yarn add express
const router = require('./Route/index.js')

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();

app.use(router)
app.listen({ port: 4000 });

console.log('Listening to port 4000');