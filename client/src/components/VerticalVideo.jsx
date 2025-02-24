import { Link } from 'react-router-dom';
import { useVideo } from '../context/VideoContext';

const VerticalVideo = ({ url, id }) => {
  const { deleteVideo } = useVideo();

  return (
    <div className="video-container vertical flex flex-col">
      <h2>Verticales</h2>
      <video controls src={url} className="video" />
      <div className="flex gap-x-5">
        <button onClick={() => deleteVideo(id)}>Eliminar</button>
        <Link to={`/videos/${id}`}>Editar</Link>
      </div>
    </div>
  );
};

export default VerticalVideo;
