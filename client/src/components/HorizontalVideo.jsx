import { useVideo } from '../context/VideoContext';
import { Link } from 'react-router-dom';

const HorizontalVideo = ({ url, id }) => {
  const { deleteVideo } = useVideo();

  return (
    <div className="video-container horizontal flex flex-col">
      <h2>Horizontales</h2>
      <video controls src={url} className="video" />
      <div className="flex gap-x-5">
        <button onClick={() => deleteVideo(id)}>Eliminar</button>
        <Link to={`/videos/${id}`}>Editar</Link>
      </div>
    </div>
  );
};

export default HorizontalVideo;
