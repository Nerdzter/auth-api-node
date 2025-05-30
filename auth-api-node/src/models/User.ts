import { Schema, model, Document } from 'mongoose';

// Interface define os campos esperados e seus tipos
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Definindo o schema do usuário
const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true // remove espaços extras no início e fim
  },
  email: {
    type: String,
    required: true,
    unique: true, // garante que não haverá e-mails duplicados
    lowercase: true // normaliza o e-mail
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // cria automaticamente os campos createdAt e updatedAt
});

// Exportando o model para usar no restante do projeto
export const User = model<IUser>('User', UserSchema);
