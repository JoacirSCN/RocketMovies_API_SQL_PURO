//const { hash, compare } = require('bcryptjs');
const AppError = require('../utils/AppError');
const sqliteConnection = require('../database/sqlite'); // É a conecção com o banco de dados

class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body;
    const db = await sqliteConnection();

    // Selecionar todos os usuarios onde o email é igual ao email do request.body
    const checkUserExists = await db.get('SELECT * FROM users WHERE email = (?)', [email]);
    if(checkUserExists) {
      throw new AppError('Este e-mail já está em uso.');
    }
    // ----------------------------------------------------------------------------------------
    // Inserir dados do Usuários
    await db.run('INSERT INTO users (name, email, password) VALUES (?,?,?)',
      [name, email, password]
    );

    // ----------------------------------------------------------------------------------------

    return res.status(201).json({name, email, password})

  }
}

module.exports = UsersController;