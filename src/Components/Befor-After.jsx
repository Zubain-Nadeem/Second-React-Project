import image from "../assets/BA-images/ba.png"

const BA = () => {
  return (
    <div>
        <section className="w-full min-h-[800px] bg-[#231F1B] py-[100px] px-[40px] flex flex-col ">
            <h1 className="text-white text-center text-[70px] font-bold"><span className="text-[#D17222]">Before</span> & AFTER</h1>
                <p className="text-white text-[18px] text-center pt-3">There are countless success stories of Solar Saver transformations, but the <br /> majority showcase significant improvements in energy efficiency and cost savings.</p>

                <div className=" flex justify-center items-center py-[20px]">
                    <img src={image} alt="Before after image" className="h-[600px]" />
                </div>
        </section>
      
    </div>
  )
}

export default BA
