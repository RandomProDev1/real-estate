import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect("mongodb+srv://hastyar:Hawler1234@cluster0.myva3pn.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=Cluster0").then(() => {console.log("Connected to monogodb")})

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, request, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });
});