const LoaderSkeleton = () => {
  return (
    <div
      role="status"
      className="flex h-screen w-full animate-pulse flex-col items-center justify-center"
    >
      <span>Loading...</span>
      {/* TODO: Skeleton Loader */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoaderSkeleton;
