import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';

mongoose.connect("mongodb+srv://hastyar:Hawler1234@cluster0.myva3pn.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=Cluster0").then(() => {console.log("Connected to monogodb")})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});

app.use('/api/user', userRouter)