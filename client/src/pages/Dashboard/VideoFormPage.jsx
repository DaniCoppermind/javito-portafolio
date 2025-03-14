import { useForm } from 'react-hook-form';
import { useVideo } from '@context/VideoContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useVideoQuery } from '@hooks/useVideoQuery';
import { useEffect } from 'react';

function VideoFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createVideo, updateVideo } = useVideo();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: video, isLoading } = useVideoQuery(id);

  useEffect(() => {
    if (video) {
      setValue('url', video.url);
      setValue('orientation', video.orientation);
      setValue('language', video.language);
    }
  }, [video, setValue]);

  const onSubmit = data => {
    if (id) {
      updateVideo({ id, video: data });
    } else {
      createVideo(data);
    }
    navigate('/videos');
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="m-auto flex w-full max-w-md flex-col gap-5 rounded-md bg-zinc-800 p-10">
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
        <button
          className="bg-primary-purple my-2 w-full cursor-pointer rounded-md px-1 py-2 hover:bg-purple-700"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default VideoFormPage;
