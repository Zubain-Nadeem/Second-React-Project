import HouseImage from "../assets/Transparent-section-images/home-image.svg";

const Transparent = () => {
  return (
    <div>
      <section className="bg-[#1F1B17] w-full h-[685px] py-[20px] px-[40px]">
        <h1 className="text-white text-3xl text-center font-bold mb-[90px]
        ">
          TRANSPARENT PRICING
        </h1>

        <div className=" w-[100%] flex gap-5">
            
          <div className=" w-[33%] p-[33px] bg-[#1A1714] h-[431px] flex flex-col items-start gap-6 rounded-3xl">

            <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
              <img src={HouseImage} alt="House image" />
            </div>

            <h3 className="text-white text-4xl font-bold">
              <span className="text-[#EE8023]">STANDARD</span> PLAN
            </h3>
            <p className="text-white text-[18px] font-semibold">
              Efficient and affordable solar solutions for every Household.
              Perfect for Residential use.
            </p>
            <p className="text-white">$1.50 / watt</p>
            <button className="hover:bg-[#fff] hover:text-black text-white cursor-pointer px-[26px] py-[10px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]">
              Calculate Solar
            </button>
          </div>

            <div className=" w-[33%] p-[33px] bg-[#1A1714] h-[431px] flex flex-col items-start gap-6 rounded-3xl">

            <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
              <img src={HouseImage} alt="House image" />
            </div>

            <h3 className="text-white text-4xl font-bold">
              <span className="text-[#EE8023]">STANDARD</span> PLAN
            </h3>
            <p className="text-white text-[18px] font-semibold">
              Efficient and affordable solar solutions for every Household.
              Perfect for Residential use.
            </p>
            <p className="text-white">$1.50 / watt</p>
            <button className="hover:bg-[#fff] hover:text-black text-white cursor-pointer px-[26px] py-[10px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]">
              Calculate Solar
            </button>
          </div>

            <div className=" w-[33%] p-[33px] bg-[#1A1714] h-[431px] flex flex-col items-start gap-6 rounded-3xl">

            <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
              <img src={HouseImage} alt="House image" />
            </div>

            <h3 className="text-white text-4xl font-bold">
              <span className="text-[#EE8023]">STANDARD</span> PLAN
            </h3>
            <p className="text-white text-[18px] font-semibold">
              Efficient and affordable solar solutions for every Household.
              Perfect for Residential use.
            </p>
            <p className="text-white">$1.50 / watt</p>
            <button className="hover:bg-[#fff] hover:text-black text-white cursor-pointer px-[26px] py-[10px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]">
              Calculate Solar
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Transparent;
