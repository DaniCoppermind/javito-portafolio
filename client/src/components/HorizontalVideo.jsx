const HorizontalVideo = ({ url }) => {
  return (
    <div className="video-container horizontal">
      <h2>Horizontales</h2>
      <video controls src={url} className="video" />
    </div>
  );
};

export default HorizontalVideo;
