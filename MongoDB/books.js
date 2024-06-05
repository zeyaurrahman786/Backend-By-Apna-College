const mongoose = require('mongoose');

main()
.then(() => {
    console.log('Connected to MongoDB Sucessfully');
})
.catch(err => console.log(err)); 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}



const bookSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min : [1, 'Price is too low for Amazon selling'],

    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-Fiction", "Biography", "History", "Sci-Fi"],
        default: "Non-Fiction",
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);



// let book1 = new Book ({
//     title: "The Post Office",
//     author: "Rabindra Nath Tagore",
//     price: 549,
//     discount: 10,
//     category: "Fiction",
//     genre: ["Fiction", "Non-Fiction", "Biography", "History", "Sci-Fi"],
// });

// book1
// .save()
// .then(res =>{
//     console.log(res);
// })
// .catch(err =>{
//     console.log(err);
// })







Book.findByIdAndUpdate("665fe353a4096c5b68840311", {price: -999}, {runValidators: true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})