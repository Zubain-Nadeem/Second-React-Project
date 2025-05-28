import BgImage from "../assets/Ready-to-start-image/Background.webp"

const Ready = () => {
    return (
        <div>
            <section className="w-full h-[97vh] bg-cover bg-center bg-no-repeat flex justify-center items-center" style={{ backgroundImage: `url(${BgImage})` }}>
                <div className=" w-[50%] flex flex-col justify-center items-center gap-6 h-[400px] ">
                    <h2 className="text-[70px] font-bold">READY TO START</h2>
                    <p className="text-white text-[18px]">Our solar power experts will help you find the perfect solution for your home.</p>
                    <button className="hover:bg-[#fff] hover:text-black text-white cursor-pointer px-[26px] py-[10px] bg-[#EB7F25] font-normal border-none rounded-2xl text-[15px]">
                        Calculate Solar
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Ready
