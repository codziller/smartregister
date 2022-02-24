import Koa from 'koa'
import Logger from 'koa-logger'
import Cors from '@koa/cors'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'

import routes from './routes/index.js'
import {
  authMiddleware,
  errorHandlingMiddleware,
  internalAuthentication
} from './middlewares/index.js'

const app = new Koa()

app.use(helmet())
app.use(Logger())

app.use(
  Cors(
    {
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
  }
  )
)

app.use(koaBody({ multipart: true }))

app.use(errorHandlingMiddleware)

app.use(authMiddleware)

app.use(internalAuthentication)

app.use(routes.routes())
app.use(routes.allowedMethods())

export default app
