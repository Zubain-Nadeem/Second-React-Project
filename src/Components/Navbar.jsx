import LogoImage from '../assets/Nav-bar-images/header-logo-image.png'

const Navbar = () => {
  return (
    <div>
        <header className=" w-[100%] bg-[#231F1B]">
            <div className=" w-[95%] m-auto h-[69px] flex text-white items-center justify-between ">
                <img className='h-[71px]' src={LogoImage} alt="Header logo image" />

           
                    <ul className='flex text-[14px] gap-[60px] transition-all items-center  '>
                        <li className='hover:text-[#EB7F25]'><a href="#">Pricing</a></li>
                        <li className='hover:text-[#EB7F25]'><a href="#">About</a></li>
                        <li className='hover:text-[#EB7F25]'><a href="#">Tools</a></li>
                        <li className='hover:text-[#EB7F25]'><a href="#">How It Works</a></li>
                        <li className='hover:text-[#EB7F25]'><a href="#">Testimonials</a></li>
                        <li className='hover:text-[#EB7F25]'><a href="#">FAQ</a></li>
                    </ul>
             
                
                <button className='hover:bg-[#fff] hover:text-black cursor-pointer px-[26px] py-[12px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]'>Calculate Solar</button>

            </div>

        </header>
    </div>
  )
}

export default Navbar
