const mongoose = require('mongoose');

const db = async () => {
    const URL = ("mongodb+srv://raja:lifeis@cluster0.edzsdqq.mongodb.net/?retryWrites=true&w=majority")
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('NrK Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};


module.exports = {db}






// const db = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log('Db Connected')
//     } catch (error) {
//         console.log('DB Connection Error');
//     }
// }
