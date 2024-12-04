import { Hono } from 'hono';
import { sign,verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './router/user';
import { blogRouter } from './router/blog';
import { cors } from 'hono/cors'

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
	Variables : {
		userId: string
	}
}>();

/**
 * If you want, you can extract the prisma variable in a global middleware that set’s it on the context variable
 * app.use(”*”, (c) => {
	const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  c.set(”prisma”, prisma);
})
 */


// Create the main Hono app
//const app = new Hono();

app.use('/*', cors())
app.route("api/v1/user",userRouter);
app.route("api/v1/blog",blogRouter);

export default app;
