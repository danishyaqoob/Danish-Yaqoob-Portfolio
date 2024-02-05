



const AboutSection = () => {
    return (
        <>
        <section id="about_me" className="bg-[#323846] w-full mt-[45px] sm:mt-[60px] md:mt-[80px] lg:mt-[90px] pt-[20px] pb-[60px]  ">
          <div className="max-w-[1240px] mx-auto px-[8px] sm:px-[12px] flex items-center gap-[12px] lg:flex-row flex-col ">
            <div className="flex items-center justify-center w-[280px] sm:w-[440px] md:w-[480px] ">
              <img className=" " src="/images/about1.png"/>
            </div>
            <div className="flex-1 pt-[22px] lg:pt-[0px] ">
              <h2 className="text-[24px] md:text-[28px] font-[800] text-[#fff] ">About <span className="text-[#01eefe] ">Me</span></h2>
              <p className=" text-[#fff] font-[600] text-[17px] md:text-[19px] ">Frontend Developer!</p>
              <p className="mt-[14px] text-[#ffffffbe] text-[14px] md:text-[15px] font-[500] ">As a frontend web developer, I specialize in crafting the user-facing aspects of websites and web applications. My expertise lies in translating design mockups into interactive, responsive, and visually appealing interfaces using technologies like HTML, CSS, and JavaScript. I focus on optimizing user experience by ensuring seamless navigation, fast loading times, and cross-browser compatibility. With a keen eye for design and a passion for coding, I continuously seek to stay updated with the latest trends and best practices in frontend development to deliver compelling digital experiences.</p>
              <div className="mt-[30px] flex items-center gap-[8px] ">
                  <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Download CV
                  </div>
                  {/* <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second mt-[22px] max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Download CV
                  </div> */}
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default AboutSection