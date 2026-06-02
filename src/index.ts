import { Elysia } from "elysia";

const nome = process.env.nome;

const app = new Elysia().get("/", () => `Hello Elysia ${nome}`).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
