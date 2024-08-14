import { Schema, model } from "mongoose";
const schema = new Schema({ name: String, desc: String, price: Number }, { timestamps: true })
export const Product = model('Product', schema)