import express from 'express'
import morgan from 'morgan'
import dashboardRoutes from './routes/dashboard.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)
app.use('/api', dashboardRoutes)

export default app
