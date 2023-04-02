import mongoose, { Schema } from 'mongoose';

interface IProduct extends Document {

}

const ProductSchema = new Schema<IProduct>({
  
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
