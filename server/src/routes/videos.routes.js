import { Router } from 'express'
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from '../controllers/videos.controller.js'
import { auth } from '../middlewares/auth.middleware.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createVideoSchema } from '../schemas/videos.schema.js'

const router = Router()

router.get('/videos', getVideos)

router.get('/videos/:id', getVideo)

// Management only for ADMIN
router.post('/videos', auth, validateSchema(createVideoSchema), createVideo)

router.delete('/videos/:id', auth, deleteVideo)

router.put('/videos/:id', auth, updateVideo)

export default router
