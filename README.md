# 🔐 Auth API - Projeto Fullstack com Node.js, MongoDB e HTML/CSS

Este projeto demonstra uma implementação completa de autenticação com backend em Node.js + Express + MongoDB, e frontend 100% funcional usando HTML, CSS e JavaScript puro. Desenvolvido por **Nayderson Silva**, com foco em aprendizagem real, comunicação entre camadas e entrega de uma experiência profissional.


## ✅ Aprendizados

> Esse projeto foi construído passo a passo, com foco em aprender autenticação real, boas práticas de API, segurança com JWT, e comunicação entre camadas. A experiência foi planejada para simular desafios reais de desenvolvimento web.

---

## 🚀 Funcionalidades

- Cadastro de usuário com criptografia de senha (bcrypt)
- Login com geração de token JWT
- Rota protegida por autenticação (middleware)
- Frontend HTML com feedback visual e responsividade
- Armazenamento em MongoDB via Mongoose

---

## 🧠 Stacks e Tecnologias Utilizadas

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token (JWT)
- dotenv
- CORS

### Frontend
- HTML5
- CSS3 (responsivo)
- JavaScript (fetch API, localStorage)

### Dev Tools
- Visual Studio Code
- Live Server
- ts-node-dev
- Typescript
- Insomnia/Postman (para testes)

---

## 🧩 Estrutura de Pastas

```bash
auth-api-node/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── index.ts
├── auth-front-html/
│   ├── index.html
│   ├── register.html
│   ├── login.html
│   ├── profile.html
│   ├── success.html
│   ├── style.css
│   └── script.js
```

---

## 📸 Prints do Projeto

> ![Index](./prints-telas/Index.png)
> ![Tela de Cadastro](./prints-telas/Cadastrar.png)
> ![Tela de Login](./prints-telas/Login.png)
> ![Validação no Perfil](./prints-telas/Perfil.png)

---

## 📦 Como rodar localmente

### 1. Clone o repositório
```bash
git clone https://github.com/Nerdzter/auth-api-node.git
```

### 2. Rode o backend
```bash
cd auth-api-node/auth-api-node
npm install
npm run dev
```

### 3. Rode o frontend
```bash
cd ../auth-front-html

# Use o Live Server (VS Code)
```

Acesse [http://127.0.0.1:5500/auth-front-html/index.html](http://127.0.0.1:5500/auth-front-html/index.html)

---

## ❗ Desafios enfrentados

- **Erro de CORS** entre o front e back → resolvido com `cors()` no backend
- **Conflito de origem entre `localhost` e `127.0.0.1`** → corrigido com URL padronizada
- **Requisições bloqueadas via `file://`** → resolvido com Live Server / http-server
- **Validação visual no frontend** → implementado com JS + mensagens visuais
- **Integração real com banco de dados** → usando Mongo Atlas local com conexão segura

---


---

## 🤝 Contato

Desenvolvido por [Nayderson Silva](https://github.com/Nerdzter)  
📧 Email: nayderson.silva.oliveira@gmail.com  
🐙 GitHub: [@Nerdzter](https://github.com/Nerdzter)

---

> Se esse projeto te ajudou ou inspirou, deixa uma estrela ⭐ no repositório!
