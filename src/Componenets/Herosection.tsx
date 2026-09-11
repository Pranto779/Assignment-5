import HeroLogo from '../assets/banner-stack.png';
export const Herosection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto items-center  ">
      <div className="text-center md:text-left md:flex flex-col space-y-5 flex-1">
        <h1 className=" text-4xl md:text-6xl font-bold">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className=" text-[14px] md:text-xl">
          Explore frontend, backend, database, and tooling options,
          <br /> compare them side by side, and put together the stack that fits
          your <br /> next project.
        </p>
        <div className=" flex justify-center md:justify-normal items-center gap-7">
          <button className="bg-gradient-to-r from-orange-500 to-purple-500 px-5 py-2 rounded-lg text-white font-medium">
            Explore Technologies
          </button>

          <a href="Learn More">Learn More</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img className="w-[450px]" src={HeroLogo} alt="" />
      </div>
    </div>
  );
};
