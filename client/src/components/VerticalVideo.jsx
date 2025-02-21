const VerticalVideo = ({ url }) => {
  return (
    <div className="video-container vertical">
      <h2>Verticales</h2>
      <video controls src={url} className="video" />
    </div>
  );
};

export default VerticalVideo;
