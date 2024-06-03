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



// CRUD Operations :-)




// Create :-----------------------------------------------------------

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




// Insert :----------------------------------------------------------------

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




// Find :--------------------------------------------------------

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




// User.findById({_id: '665e006d84ecec3f65ac8f5a'})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })





// Update :----------------------------------------------------------------

// User.updateOne({name: "Peter"}, {age: 47})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })



// User.updateMany({age: {$gt: 48}}, {age: 75})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })






// FindOneAndUpdate:----------------------------------------------------------

// User.findOneAndUpdate({name: "John"}, {age: 35})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })



// User.findOneAndUpdate({name: "John"}, {age: 25}, {new: true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })




// User.findByIdAndUpdate({_id: '665e006d84ecec3f65ac8f5b'}, {age: 27}, {new: true})
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })






// Delete :----------------------------------------------------------------

// User.deleteOne({name: "Peter"})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })



// User.deleteMany({name: "Zeyaur"})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })



// User.findByIdAndDelete({_id: '665e006d84ecec3f65ac8f5a'})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })



// User.findOneAndDelete({age: {$gt: 25}})
//   .then((res)=>{
//     console.log(res);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })