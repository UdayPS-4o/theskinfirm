const AnimatedServicePageSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative bg-[#F8F4EB] overflow-hidden">
        <div className="flex flex-col xl:flex-row min-h-[500px] xl:min-h-[600px]">
          {/* Left Content Skeleton */}
          <div className="relative z-10 flex items-center justify-center xl:w-1/2 px-4 md:px-8 lg:px-[50px] py-8 md:py-10">
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              <div className="flex flex-col gap-2.5">
                <div className="h-6 skeleton-shimmer rounded w-1/4"></div>
                <div className="h-12 skeleton-shimmer rounded w-3/4"></div>
                <div className="h-8 skeleton-shimmer rounded w-full mt-2"></div>
                <div className="h-8 skeleton-shimmer rounded w-5/6"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                <div className="h-14 skeleton-shimmer rounded-lg w-full sm:w-64"></div>
              </div>
            </div>
          </div>
          {/* Right Content Skeleton */}
          <div className="relative xl:w-1/2 min-h-[400px] xl:min-h-full skeleton-shimmer"></div>
        </div>
      </section>

      {/* Info Section Skeleton */}
      <section className="py-6 md:py-8 px-4 md:px-8 bg-white">
        <div className="w-full md:w-4/5 mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <div className="h-10 skeleton-shimmer rounded w-1/2 mb-4"></div>
            <div className="h-6 skeleton-shimmer rounded w-full"></div>
            <div className="h-6 skeleton-shimmer rounded w-full"></div>
            <div className="h-6 skeleton-shimmer rounded w-3/4"></div>
          </div>
        </div>
      </section>

      {/* Bullet Points Section Skeleton */}
      <section className="py-6 md:py-8 px-4 md:px-8 bg-[#FFF9F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6 items-center">
            <div className="h-10 skeleton-shimmer rounded w-1/2 mb-4"></div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-24 skeleton-shimmer rounded-lg"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimatedServicePageSkeleton;
