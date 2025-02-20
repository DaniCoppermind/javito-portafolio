import { Video } from '../models/video.model.js'

export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find()
    res.json(videos)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createVideo = async (req, res) => {
  try {
    const { url, typeOfVideo } = req.body
    const newVideo = new Video({
      url,
      typeOfVideo,
    })
    await newVideo.save()
    res.json(newVideo)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id)
    if (!deletedVideo)
      return res.status(404).json({ message: 'Video not found' })

    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateVideo = async (req, res) => {
  try {
    const { url, typeOfVideo } = req.body
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      { url, typeOfVideo },
      { new: true }
    )
    if (!updatedVideo)
      return res.status(404).json({ message: 'Video not found' })

    return res.json(updatedVideo)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
    if (!video) return res.status(404).json({ message: 'Video not found' })
    return res.json(video)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
