import mongoose from 'mongoose'
export const connectDb = () => mongoose.connect('mongodb://localhost:27017/mvc').then(() => console.log('db connected successfully'))