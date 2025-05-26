import HeroImage from "../assets/Hero-section-images/hero-image.webp"

const Hero = () => {
  return (
    <div>
      <section className=" w-[100%]  px-[40px] min-h-[100vh] bg-[#231F1B]">
        <div className=" w-[90%] m-auto min-h-[100vh] py-[100px] flex justify-center gap-10  items-center flex-col ">
          <h1 className="text-[70px] text-center font-semibold text-[#fff]">
            <span className="text-[#EB7F25]">DOES YOUR HOME </span> NEED QUALITY
            SOLAR PANEL INSTALLATION?
          </h1>

          <div className=" w-full text-center">
            <p className="text-[#fff] text-lg">
              Trust our experienced solar power experts to customize the perfect
              solution for your home.
            </p>
          </div>

          <div className="">
            <button className="hover:bg-[#fff] hover:text-black cursor-pointer px-[26px] py-[10px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]">
              Calculate Solar
            </button>
          </div>

         
            <img className="" src={HeroImage} alt="Hero seection Mian image" />
        
        </div>
      </section>
    </div>
  );
};

export default Hero;
