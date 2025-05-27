import Img1 from "../assets/Solar-saver-Images/Real-time-image.svg";
import Img2 from "../assets/Solar-saver-Images/Minimal-image.svg";
import Img3 from "../assets/Solar-saver-Images/House-image.svg";
import Img4 from "../assets/Solar-saver-Images/House-Leaf-image.svg";
import Img5 from "../assets/Solar-saver-Images/Customization-image.svg";
import Img6 from "../assets/Solar-saver-Images/Feature-image.svg";

const Solar = () => {
  return (
    <div>
      <section className="w-full h-[800px] py-[70px] px-[40px] bg-[#231F1B]">
        <div className="flex flex-col gap-4 py-7">
          <h1 className="text-white text-center text-[70px] font-bold">
            <span className="text-[#EE8023]">SOLAR</span> SAVER TOOLS
          </h1>
          <p className="text-center text-[18px] text-white">
            There are many variations of Solar Saver tools available, but the
            majority have suffered alteration in some form.
          </p>
        </div>

        <section className="pt-7">
          <div className="w-full flex justify-between">
            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[33%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img1} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Real-time, accurate <br />
                production estimates.
              </p>
            </div>

            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[32%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img2} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Homeowner-focused <br />
                proposal design for clarity.
              </p>
            </div>

            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[32%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img3} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Minimal training time for
                <br />
                new sales representatives.
              </p>
            </div>
          </div>

          <div className="w-full flex justify-between mt-6">
            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[32%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img4} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Customizable solar sales <br />
                tools for each representative.
              </p>
            </div>

            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[32%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img5} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Quick and accurate <br />
                solar sales proposals.
              </p>
            </div>

            <div className="p-[40px] bg-[#1A1714] h-[220px] w-[32%] flex flex-col justify-center items-start gap-5 rounded-2xl ">
              <div className=" w-[72px] h-[72px] rounded-full flex justify-center items-center bg-[#EE8023] border-none">
                <img src={Img6} alt="House image" />
              </div>
              <p className="text-white font-semibold">
                Smart management features for
                <br />
                effective team coordination.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Solar;
