const Utilization = () => {
  return (
    <div>
      <section className="w-full min-h-[700px] bg-linear-65 from-[#1A1714] to-[#231F1B] px-[40px] py-[70px]">
        <div className=" w-[100%] flex justify-between ">
          <section className="flex flex-col gap-[70px] w-[50%]">
            <div className="flex flex-col justify-center items-end w-[100%] text-white bg-linear-to-r from-[#231F1B] to-[#CF8722] h-[100px] p-4">
              <h2 className="text-3xl font-bold">System Size</h2>
              <p className="text-lg">9.5 - 14.13 kWh*</p>
            </div>

            <div className="flex flex-col justify-center items-end w-[80%] text-white bg-linear-to-r from-[#231F1B] to-[#CF8722] h-[100px] p-4">
              <h2 className="text-3xl font-bold">Solar Panels</h2>
              <p className="text-lg">34 - 43*</p>
            </div>

            <div className="flex flex-col justify-center items-end w-[60%] text-white bg-linear-to-r from-[#231F1B] to-[#CF8722] h-[100px] p-4">
              <h2 className="text-3xl font-bold">CO2 Offset</h2>
              <p className="text-lg">7.65 - 9.07*</p>
            </div>
          </section>

          <section className=" w-[45%]">
            <div className="flex flex-col gap-4 jutify-center items-start">
              <h2 className="text-[#EE8023] font-bold text-[75px]">AI <span className="text-white">Utilization</span></h2>
              <p className="text-[#4B4845] text-[17px]">
                Solar Saver utilizes an AI quoting engine to estimate the ideal
                solar system size for a customer's specific needs. This system
                calculates the number of solar panels required, the potential
                CO2 offset, and the new, likely reduced monthly power bill.
              </p>
              <p className="text-[#4B4845] text-[16px]">
                By analyzing various factors such as roof size, local sun
                exposure, and current electricity usage, the AI provides
                atailored solution.
              </p>
              <p className="text-[#EE8023] text-[16px]">
                This approach ensures customers get a system that maximizes
                energy efficiency and cost savings while contributing to
                environmental sustainability.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Utilization;
