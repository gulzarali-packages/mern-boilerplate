import mongoose, { Schema } from 'mongoose';

interface ItemplateName extends Document {

}

const templateNameSchema = new Schema<ItemplateName>({
  
});

const templateName = mongoose.model<ItemplateName>('templateName', templateNameSchema);

export default templateName;
