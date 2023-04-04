import mongoose, { Schema } from 'mongoose';

interface IProduct extends Document {
    name:string
}

const ProductSchema = new Schema<IProduct>({
  name: {
    type: String
  }
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
