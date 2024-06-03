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


// const User1 = new User ({
//   name: "Rahul",
//   email: "rahul@gmail.co
//   age: 20,
// });

// User1.save();



// const User2 = new User({
//   name: "Zeyaur",
//   email: "zeyaur@gmail.com",
//   age: 21,
// });

// User2
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// }); 



// User.insertMany([
//   {name: 'John', email : 'john@example.com', age: 50},
//   {name: 'Tony', email : 'tony@example.com', age: 40},
//   {name: 'Peter', email : 'peter@example.com', age: 45},
//   {name: 'Bruce', email : 'bruce@example.com', age: 55},
//   {name: 'Adam', email : 'adam@example.com', age: 60},
// ])
// .then((res) => {
//   console.log(res);
// });




// User.find({age: {$gt: 45}})
// .then((res)=>{
//   console.log(res[0].name);
// })
// .catch((err)=>{
//   console.log(err);
// })





// User.findOne({age: {$gt: 45}})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })




User.findById({_id: '665e006d84ecec3f65ac8f5a'})
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
})