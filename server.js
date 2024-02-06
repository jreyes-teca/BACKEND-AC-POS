import Fastify from "fastify";
import cors from "@fastify/cors";
import rutas from "./routes.js";
import db from "./db/db.js";

const fastify = Fastify({ logger: true });

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
  fastify.listen({ port: 3500 });
  database();
} catch (err) {
  console.log(err);
}
