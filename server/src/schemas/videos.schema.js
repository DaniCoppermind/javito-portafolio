import { z } from 'zod'

export const createVideoSchema = z.object({
  url: z.string().url().nonempty({ message: 'URL is required' }),
  orientation: z.enum(['horizontal', 'vertical'], {
    required_error: 'Orientation is required',
  }),
  language: z.enum(['en', 'es'], { required_error: 'Language is required' }),
})
