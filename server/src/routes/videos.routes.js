import { Router } from 'express'
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from '../controllers/videos.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/videos', getVideos)

router.get('/videos/:id', auth, getVideo)

router.post('/videos', auth, createVideo)

router.delete('/videos/:id', auth, deleteVideo)

router.put('/videos/:id', updateVideo)

export default router
