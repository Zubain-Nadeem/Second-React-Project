import Logo from "../assets/Nav-bar-images/header-logo-image.png"
import InstaImage from "../assets/Footer-bottom-images/insta.svg"
import TwiterImage from "../assets/Footer-bottom-images/twiter.svg"
import FBImage from "../assets/Footer-bottom-images/fb.svg"

const Footer = () => {
    return (
        <div>
            <section className="bg-[#231F1B] w-full pt-[60px]">
                <div className="h-[150px] w-[100%] flex flex-col gap-4">
                    <div className=" w-[95%] m-auto h-[63px] flex text-white justify-between items-center">
                        <img className='h-[71px]' src={Logo} alt="Header logo image" />


                        <ul className='flex text-[14px] gap-[60px] transition-all items-center  '>
                            <li className='hover:text-[#EB7F25]'><a href="#">Pricing</a></li>
                            <li className='hover:text-[#EB7F25]'><a href="#">About</a></li>
                            <li className='hover:text-[#EB7F25]'><a href="#">Tools</a></li>
                            <li className='hover:text-[#EB7F25]'><a href="#">How It Works</a></li>
                            <li className='hover:text-[#EB7F25]'><a href="#">Testimonials</a></li>
                            <li className='hover:text-[#EB7F25]'><a href="#">FAQ</a></li>
                        </ul>

                    </div>

                    <div className="border-2 border-b-gray-700"></div>

                    <div className=" m-auto w-[95%] text-white h-[63px] flex justify-between items-center">
                        <p>© 2024 Solar Saver. All rights reserved.</p>

                        <div className="flex gap-5">
                            <img src={InstaImage} alt="instagram image" className="h-[24px]" />
                            <img src={TwiterImage} alt="instagram image" className="h-[24px]" />
                            <img src={FBImage} alt="instagram image" className="h-[24px]" />
                        </div>

                    </div>

                </div>

                <div className="bg-[#1A1714] w-full h-[50px] flex items-center justify-center">
                    <h2 className="text-white font-[30px] font-semibold text-center">Developed by <span className="text-[#E78023]">SIGMA WEB TEAM</span></h2>

                </div>

            </section>

        </div>
    )
}

export default Footer
