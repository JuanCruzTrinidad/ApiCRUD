import mongoose from 'mongoose';

export async function startConnection(){
    const db = await mongoose.connect('mongodb://localhost/stocksonrisas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('Database is connected');
}

