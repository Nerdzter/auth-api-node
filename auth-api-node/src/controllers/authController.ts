import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

// Função responsável pelo registro de novos usuários
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Validação básica de campos obrigatórios
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Preencha todos os campos' });
    }

    // Verifica se já existe um usuário com o mesmo e-mail
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'E-mail já está em uso' });
    }

    // Criptografa a senha com bcrypt antes de salvar
    // salt adiciona entropia ao hash e evita ataques de rainbow table
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Cria e salva novo usuário
    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    return res.status(201).json({ message: 'Usuário registrado com sucesso' });

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno', error });
  }
};

// Função responsável por autenticar usuário e retornar JWT
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Validação simples de entrada
    if (!email || !password) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios' });
    }

    // Busca usuário pelo e-mail
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Compara a senha enviada com o hash armazenado
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera token JWT com o _id do usuário como payload
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no login', error });
  }
};
