const CardVideo = ({ url }) => {
  return (
    <div className="aspect-video overflow-hidden">
      <iframe
        src={url}
        className="h-full w-full border-0 object-cover"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CardVideo;
