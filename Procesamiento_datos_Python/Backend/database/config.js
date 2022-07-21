const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN , {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true
    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs');
    }


}


module.exports = {
    dbConnection
}