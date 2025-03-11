import SkeletonStructure from './SkeletonStructure';

const LoaderSkeleton = () => {
  return (
    <div role="status" className="flex animate-pulse flex-col space-y-5">
      <SkeletonStructure />
      <SkeletonStructure />
      <SkeletonStructure />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoaderSkeleton;
