# NodeAPI

Projeto simples de estudo de Node.js + Express que implementa uma API REST para
gerenciar usuários em memória. Ideal para aprender os conceitos básicos de
rotas, requisições HTTP, CORS e integração com um frontend estático.

## Funcionalidades
- Listar usuários
- Consultar usuário por ID
- Criar usuário (nome e email)
- Atualizar usuário (nome e/ou email)
- Remover usuário

## Estrutura do projeto
- `app.js` - servidor Express com todas as rotas da API
- `index.html` - frontend estático que consome a API
- `package.json` - dependências e scripts

## Pré-requisitos
- Node.js (v14+ recomendado)
- npm ou yarn

## Instalação
1. Instale dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
node app.js
```

Por padrão o servidor roda na porta `3000`.

## Endpoints
Base URL: `http://localhost:3000`

- GET `/usuarios` — retorna lista de usuários
- GET `/usuarios/:id` — retorna usuário com o `id` informado
- POST `/usuarios` — cria usuário. Body JSON: `{ "name": "Nome", "email": "a@b.com" }`
- PUT `/usuarios/:id` — atualiza usuário. Body JSON: `{ "name": "Novo", "email": "x@y.com" }`
- DELETE `/usuarios/:id` — remove usuário

Exemplo usando `curl`:

```bash
# Criar usuário
curl -X POST http://localhost:3000/usuarios \
	-H "Content-Type: application/json" \
	-d '{"name":"Paulo","email":"paulo@example.com"}'

# Listar usuários
curl http://localhost:3000/usuarios
```

## Frontend
O arquivo `index.html` incluído no projeto consome a API em
`http://localhost:3000/usuarios` e exibe a lista de usuários. O servidor já
possui `CORS` habilitado para permitir requisições do frontend estático.

## Observações
- Os dados são mantidos apenas em memória (array `users` em `app.js`). Ao
	reiniciar o servidor os usuários são perdidos.
- Validações são básicas e voltadas para fins didáticos.

## Próximos passos sugeridos
- Persistir dados em um banco (SQLite, PostgreSQL, etc.)
- Adicionar testes automatizados
- Melhorar tratamento de erros e estrutura do projeto

## Licença
Projeto para fins educativos — use à vontade.
