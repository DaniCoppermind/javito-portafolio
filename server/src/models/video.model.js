import mongoose from 'mongoose'

const videosSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  orientation: {
    type: String,
    required: true,
    enum: ['horizontal', 'vertical'],
  },
  language: {
    type: String,
    required: true,
    enum: ['en', 'es'],
  },
})

export const Video = mongoose.model('Video', videosSchema)
