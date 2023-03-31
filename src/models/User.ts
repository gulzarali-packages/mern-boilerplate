import mongoose, { Document, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import IUser from '../interfaces/IUser'

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model<IUser>('User', userSchema);

export default User;
