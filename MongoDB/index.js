const mongoose = require('mongoose');

main()
.then(() => {
    console.log('Connected to MongoDB Sucessfully');
})
.catch(err => console.log(err)); 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema ({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

const User1 = new User ({
  name: "Rahul",
  email: "rahul@gmail.com",
  age: 20,
});

User1.save();