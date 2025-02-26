import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import dashboardRoutes from './routes/dashboard.routes.js'
import authRoutes from './routes/auth.routes.js'
import videosRoutes from './routes/videos.routes.js'

const app = express()

app.use(
  cors({
    origin: 'https://javito-portafolio-frontend.onrender.com',
    credentials: true,
  })
)
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use('/api', authRoutes)
app.use('/api', dashboardRoutes)
app.use('/api', videosRoutes)

export default app
