export default interface IUser extends Document {
    id: string;
    email: string;
    name: string;
    password: string;
}