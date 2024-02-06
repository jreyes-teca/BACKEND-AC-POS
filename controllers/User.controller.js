import UserModel from '../models/User.model.js'

class UsersController {
  constructor() {

  }

  async create(req, reply) {
   try {
    const user = await UserModel.create(req.body);
   if(user)
    reply.status(200).send({ status: "OK - POST" });
   
   } catch (err) {
    reply.status(500).send({ "error": err });
   }
  }

  async getAll(req, res) {
    try {
      const where = {...req.query};
      const usuarios = await UserModel.findAll({where});
      res.status(201).send(usuarios);
    } catch (err) {
      res.status(500).send(
          {message: err.message || 'Error al consultar usuarios'},
      );
    }
  }

}

export default new UsersController();
