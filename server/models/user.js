import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const userSchema = new Schema(
  {
    login: String,
    email: String,
    password: String,
    characters: [],
    campaignsAsPlayer: [],
    campaignsAsGM: []
  },
  { collection: 'users' }
);

export default mongoose.model('user', userSchema);
