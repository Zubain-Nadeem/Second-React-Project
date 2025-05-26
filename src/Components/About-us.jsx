import AboutImage from "../assets/About-section-images/about-image.webp"

const About = () => {
  return (
    <div>
      <section className="w-[100%] h-[710px] bg-[#231F1B] px-[40px] py-[7%] flex gap-[100px]"> 

        <div className="w-[48%] h-[422px] flex flex-col items-start gap-5">
            <h4 className="text-[#E87521] text-xl">About us</h4>

            <h3 className="text-white text-[50px] font-bold">SOLAR SAVER</h3>

            <p className="text-[#918F8D]">Solar Saver is revolutionizing the solar industry by offering the most cost-effective solar solutions in America. We specialize in providing transparent, instant pricing for solar installations. With an innovative AI quoting engine, they ensure personalized and accurate estimates for each customer.</p>

            <p className="text-[#E87521]">Solar Saver also offers innovative battery solutions and flexible financing options, making solar energy more accessible and affordable.</p>

        </div>

        <div className=" w-[50%] h-[578px] flex flex-col items-end">
            <img className="h-[578px]" src ={AboutImage} alt="" />
        </div>

      </section>
    </div>
  )
}

export default About
