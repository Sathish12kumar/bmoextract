import HomeContent from "./components/HomeContent";
import HomeStats from "./components/HomeStats";

const Homepage = () => {
  return (
    <main
      id="home"
      className="relative flex min-h-dvh w-full max-w-full flex-col justify-between overflow-x-hidden [overflow-x:clip] bg-gradient-to-b from-[#FFF9F4] via-[#FAF9F6] to-[#FFFFFF] pt-24 sm:pt-28 md:pt-32 lg:pt-32 pb-4 sm:pb-8"
    >
      {/* Mobile hero section covers 100% viewport height with comfortable responsive top margin */}
      <div className="flex flex-1 w-full max-w-full flex-col items-center justify-center mt-3 sm:mt-5 md:mt-6 lg:mt-0 py-4 sm:py-8 lg:py-12">
        <HomeContent />
      </div>

      {/* Marquee & partner stats */}
      <div className="w-full max-w-full mt-4 sm:mt-8 lg:mt-10">
        <HomeStats />
      </div>
    </main>
  );
};

export default Homepage;
