export default interface IUser extends Document {
    id: string;
    email: string;
    userName: string;
    password: string;
}