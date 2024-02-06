import Fastify from "fastify";
import cors from "@fastify/cors";
import rutas from "./routes.js";
import db from "./db/db.js";
import 'dotenv/config';

const port = process.env.PORT_APP || 3000;
const host = process.env.HOST_APP || 'localhost';

const fastify = Fastify({
  logger: {
      transport: {
        target: "pino-pretty",
      },
    },
});

//CORS
await fastify.register(cors, {});

// RUTAS
rutas.forEach((ruta) => {
  fastify.route(ruta);
});

// CONEXION A LA BASE DE DATOS
async function database() {
  try {
    await db.sync();
    console.log("Conectado a la base de datos");
  } catch (err) {
    console.log(err)
  }
}

try {
  fastify.listen({host: host, port: port });
  database();
} catch (err) {
  console.log(err);
}
