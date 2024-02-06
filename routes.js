
import UsersController from "./controllers/User.controller.js";

const rutas = [ 
  {
    method: "GET",
    url: "/usuarios",
    handler:UsersController.getAll,
  },
  {
    method: "POST",
    url: "/usuarios",
    handler:UsersController.create,
    // handler: UserController.create,
  },
  {
    method: "PUT",
    url: "/usuarios",
    handler: async (req, reply) => {
     reply.status(200).send({ status: "OK - PUT" });
    },
  },
  {
    method: "DELETE",
    url: "/usuarios",
    handler: async (req, reply) => {
     reply.status(200).send({ status: "OK - DELETE" });
    },
  },
];

export default rutas;
