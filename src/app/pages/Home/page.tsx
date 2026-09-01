import HomeContent from "./components/HomeContent";

const Homepage = () => {
  return (
    <div
      id="Home"
      className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#FFF7F2] pt-20"
    >
      <HomeContent />
    </div>
  );
};

export default Homepage;
