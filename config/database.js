const mongoose = require('mongoose')

const connectDb = async() =>{
    await mongoose.connect('mongodb+srv://node_Project:shreya%4023@node.a0ebk.mongodb.net/job')
}


module.exports ={
    connectDb
}
