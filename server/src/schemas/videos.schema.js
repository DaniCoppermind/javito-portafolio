import { z } from 'zod'

export const createVideoSchema = z.object({
  url: z.string().url().nonempty({ message: 'URL is required' }),
  typeOfVideo: z.boolean({ required_error: 'Type of video is required' }),
  language: z.enum(['en', 'es'], { required_error: 'Language is required' }),
})
