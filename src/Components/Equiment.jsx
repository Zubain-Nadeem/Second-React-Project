import Image from "../assets/Equiment-images/Equipment-section-image.svg"

const Equiment = () => {
  return (
    <div>
      <section className="w-full h-[800px] bg-[#231F1B] px-[40px]">
        <div className="flex flex-col gap-4 pb-[4%] ">
            <h1 className="text-white text-[70px] font-bold text-center"><span className="text-[#EE8023]">BEST</span> EQUIPMENT IN THE INDUSTRY</h1>
            <p className="text-center text-white text-[18px]">Solar Saver uses the highest quality solar panels and inverters. Trust our cutting-edge technology for superior <br /> performance and durability.</p>
          </div>

          <div className="w-full flex gap-5">
            <div className="w-[33%] h-[410px] p-[50px] flex flex-col items-center gap-7 bg-[#1A1714] rounded-4xl">
                <img className="h-[120px]" src={Image} alt="House image" />
                <h2 className="text-white font-bold text-[30px]">PANELS</h2>
                <p className="text-white text-[18px] text-center">Solar Saver offers industry-leading solar panels. Experience unparalleled efficiency and durability with our advanced technology.</p>
            </div>

            <div className="w-[33%] h-[410px] p-[50px] flex flex-col items-center gap-7 bg-[#1A1714] rounded-4xl">
                <img className="h-[120px]" src={Image} alt="House image" />
                <h2 className="text-white font-bold text-[30px]">INVERTERS</h2>
                <p className="text-white text-[18px] text-center">Solar Saver supplies high-performance inverters. Our inverters ensure maximum energy conversion and system reliability.</p>
            </div>

            <div className="w-[33%] h-[410px] p-[50px] flex flex-col items-center gap-7 bg-[#1A1714] rounded-4xl">
                <img className="h-[120px]" src={Image} alt="House image" />
                <h2 className="text-white font-bold text-[30px]">BATTERIES</h2>
                <p className="text-white text-[18px] text-center">Solar Saver provides state-of-the-art batteries. Enjoy consistent and long lasting energy storage with our premium solutions.</p>
            </div>
          </div>

      </section>
    </div>
  )
}

export default Equiment
