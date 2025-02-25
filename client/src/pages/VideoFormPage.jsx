import { useForm } from 'react-hook-form';
import { useVideo } from '../context/VideoContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function VideoFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createVideo, getVideo, updateVideo } = useVideo();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadVideo() {
      if (params.id) {
        const video = await getVideo(params.id);
        setValue('url', video.url);
        setValue('orientation', video.orientation);
        setValue('language', video.language);
      }
    }
    loadVideo();
  }, [params.id, getVideo, setValue]);

  const onSubmit = data => {
    if (params.id) {
      updateVideo(params.id, data);
    } else {
      createVideo(data);
    }
    navigate('/videos');
  };

  return (
    <div className="w-full max-w-md rounded-md bg-zinc-800 p-10">
      <h1>Agregar Videos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="URL del video"
            required
            {...register('url', { required: true })}
            autoFocus
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
          />
        </div>
        <div>
          <select
            {...register('orientation', { required: true })}
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
          >
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>
        <div>
          <select
            {...register('language', { required: true })}
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
          >
            <option value="en">Inglés</option>
            <option value="es">Español</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default VideoFormPage;

// url, tipo de video, idioma
