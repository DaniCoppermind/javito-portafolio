const VideoCard = ({ id, url }) => {
  return (
    <div key={id} className="group relative cursor-pointer">
      <div className="aspect-video overflow-hidden rounded-lg bg-gray-800">
        <iframe src={url} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default VideoCard;
