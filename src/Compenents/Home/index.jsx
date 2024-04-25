import Link from "next/link"




const HomeSection = () => {
    return (
        <>
            <div id="home" className=" w-full">
                <div className="flex gap-[36px] items-center max-w-[1240px] lg:flex-row flex-col px-[14px] sm:px-[20px] mx-auto pt-[70px] sm:pt-[80px] md:pt-[100px] ">
                    <div className="flex-1 ">
                    <h3 className="text-[20px] md:text-[22px] text-[#fff] font-[700] ">Hello, it&apos;s Me</h3>
                    <h2 className="text-[40px] md:text-[50px] text-[#fff] font-[900] ">Danish Yaqoob</h2>
                    <h2 className="text-[20px] md:text-[25px] text-[#fff] font-[700] flex items-center gap-[4px] line-clamp-1 "><p className=" whitespace-nowrap">and i&apos;m a</p> <p className="text-[#01eefe] line-clamp-1 "> Frontend Web Developer</p></h2>
                    <p className="text-[#ffffffbe] text-[12px] md:text-[13px] sm:text-[15px] mt-[16px] md:mt-[20px] font-[500] ">Crafting intuitive user interfaces with precision and creativity, bringing concepts to life through code and design. Dedicated to optimizing user experiences with responsive, interactive web solutions.</p>
                    <div className="flex items-center gap-[14px] mt-[22px] ">
                        <Link target="blank" href={'https://www.linkedin.com/in/danish-yaqoob-36a42a262/?originalSubdomain=pk'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-linkedin-in text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                        <Link target="blank" href={'https://www.facebook.com/danishyaqoobmoon/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-facebook-f text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                        <Link target="blank" href={'https://www.youtube.com/@DanishYaqoobOfficial'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-youtube text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                        <Link target="blank" href={'https://www.instagram.com/danishyaqoobmoon/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-instagram text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                    </div>
                    <a href="#contact_me" className="rounded-[30px] inline-block shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second mt-[22px] max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                        Contact me
                    </a>
                    </div>
                    <div className="image w-[270px] sm:w-[440px] md:w-[480px]">
                        <img className="" src="/images/rounded.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection