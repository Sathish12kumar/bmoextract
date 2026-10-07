import HomeContent from "./components/HomeContent";
import HomeStats from "./components/HomeStats";

const Homepage = () => {
  return (
    <main
      id="home"
      className="relative flex w-full flex-col items-center justify-start overflow-x-hidden bg-gradient-to-b from-[#FFF9F4] via-[#FAF9F6] to-[#FFFFFF] pt-24 sm:pt-28 lg:pt-32 pb-0"
    >
      <HomeContent />

      <div className="mt-8 w-full sm:mt-10 lg:mt-12">
        <HomeStats />
      </div>
    </main>
  );
};

export default Homepage;
