import { useForm } from 'react-hook-form';
import { useVideo } from '../context/VideoContext';

function VideoFormPage() {
  const { register, handleSubmit } = useForm();
  const { createVideo } = useVideo();

  const onSubmit = data => {
    const updatedTypeOfVideo = JSON.parse(data.typeOfVideo);
    const updatedData = { ...data, typeOfVideo: updatedTypeOfVideo };
    createVideo(updatedData);
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
            {...register('typeOfVideo', { required: true })}
            className="my-2 w-full rounded-md bg-zinc-700 px-4 py-2 text-white"
          >
            <option value="true">Horizontal</option>
            <option value="false">Vertical</option>
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
