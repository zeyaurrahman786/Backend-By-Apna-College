// getting-started.js
const mongoose = require('mongoose');

main()
.then(() => {
    console.log('Connected to MongoDB!');
    mongoose.connection.close();
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}