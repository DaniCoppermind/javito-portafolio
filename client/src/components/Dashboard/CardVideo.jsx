import { Link } from 'react-router-dom';
import { useVideo } from '@context/VideoContext';

const CardVideo = ({ video }) => {
  const { orientation, url, language, _id: id } = video;
  const { deleteVideo } = useVideo();

  const handleDelete = () => {
    deleteVideo(id);
  };

  return (
    <main className="m-2 flex flex-col flex-wrap items-start justify-center">
      {orientation === 'horizontal' ? (
        <div className="m-4 flex flex-col items-center gap-2">
          <iframe
            className="border-0"
            src={url}
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
          <div className="flex gap-5">
            <button
              onClick={handleDelete}
              className="cursor-pointer rounded-lg bg-red-500 px-4 py-2"
            >
              Borrar
            </button>
            <Link
              to={`/videos/${id}`}
              className="bg-secondary-green rounded-lg px-4 py-2"
            >
              Editar
            </Link>
          </div>
        </div>
      ) : (
        <div className="m-4 flex flex-col items-center gap-2">
          <iframe
            className="border-0"
            src={url}
            allowFullScreen
            allow="autoplay; encrypted-media"
          ></iframe>
          <div className="flex gap-5">
            <button
              onClick={handleDelete}
              className="cursor-pointer rounded-lg bg-red-500 px-4 py-2"
            >
              Borrar
            </button>
            <Link
              to={`/videos/${id}`}
              className="bg-secondary-green rounded-lg px-4 py-2"
            >
              Editar
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CardVideo;
