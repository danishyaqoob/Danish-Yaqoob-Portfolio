import Header from "@/Compenents/Header";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header/>
        <div className=" w-full">
            <div className="flex gap-[36px] items-center max-w-[1240px] lg:flex-row flex-col px-[14px] sm:px-[20px] mx-auto pt-[70px] sm:pt-[80px] md:pt-[100px] ">
                <div className="flex-1 ">
                  <h3 className="text-[20px] md:text-[22px] text-[#fff] font-[700] ">Hello, it's Me</h3>
                  <h2 className="text-[40px] md:text-[50px] text-[#fff] font-[900] ">Danish Yaqoob</h2>
                  <h2 className="text-[20px] md:text-[25px] text-[#fff] font-[700] flex items-center gap-[4px] line-clamp-1 "><p className=" whitespace-nowrap">and i'm a</p> <p className="text-[#01eefe] line-clamp-1 "> Frontend Web Developer</p></h2>
                  <p className="text-[#ffffffbe] text-[12px] md:text-[13px] sm:text-[15px] mt-[16px] md:mt-[20px] font-[500] ">Crafting intuitive user interfaces with precision and creativity, bringing concepts to life through code and design. Dedicated to optimizing user experiences with responsive, interactive web solutions.</p>
                  <div className="flex items-center gap-[14px] mt-[22px] ">
                    <Link target="blank" href={''} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-linkedin-in text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                    <Link target="blank" href={'https://www.facebook.com/danishyaqoobmoon/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-facebook-f text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                    <Link target="blank" href={'https://www.youtube.com/@DanishYaqoobOfficial'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-youtube text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                    <Link target="blank" href={'https://www.instagram.com/danishyaqoobmoon/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-brands fa-instagram text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
                  </div>
                  <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second mt-[22px] max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Contact me
                  </div>
                </div>
                <div className="image w-[400px] sm:w-[450px] md:w-[500px]">
                  <img className="" src="/images/rounded.png" />
                </div>
            </div>
        </div>
        <section id="about_me" className="bg-[#323846] w-full mt-[45px] sm:mt-[60px] md:mt-[80px] lg:mt-[90px] pt-[20px] pb-[60px]  ">
          <div className="max-w-[1240px] mx-auto px-[8px] sm:px-[12px] flex items-center gap-[12px] lg:flex-row flex-col ">
            <div className="flex items-center justify-center w-[300px] sm:w-[400px] md:w-[500px] ">
              <img className=" " src="/images/about1.png"/>
            </div>
            <div className="flex-1 pt-[22px] lg:pt-[0px] ">
              <h2 className="text-[24px] md:text-[28px] font-[800] text-[#fff] ">About <span className="text-[#01eefe] ">Me</span></h2>
              <p className=" text-[#fff] font-[600] text-[17px] md:text-[19px] ">Frontend Developer!</p>
              <p className="mt-[14px] text-[#ffffffbe] text-[14px] md:text-[15px] font-[500] ">As a frontend web developer, I specialize in crafting the user-facing aspects of websites and web applications. My expertise lies in translating design mockups into interactive, responsive, and visually appealing interfaces using technologies like HTML, CSS, and JavaScript. I focus on optimizing user experience by ensuring seamless navigation, fast loading times, and cross-browser compatibility. With a keen eye for design and a passion for coding, I continuously seek to stay updated with the latest trends and best practices in frontend development to deliver compelling digital experiences.</p>
              <div className="mt-[30px] flex items-center gap-[8px] ">
                  <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    read more
                  </div>
                  {/* <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second mt-[22px] max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Download CV
                  </div> */}
              </div>
            </div>
          </div>
        </section>
        <section id="services" className=" w-full  ">
          <div className="max-w-[1240px] mx-auto px-[8px] sm:px-[12px] py-[60px] ">
          <h2 className=" text-[24px] md:text-[28px] font-[800] text-[#fff] text-center ">Our <span className="text-[#01eefe] ">Services</span></h2>
            <div className="flex items-center gap-[12px] md:gap-[16px] flex-wrap justify-center mt-[22px] ">
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-solid fa-code text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">Web Development</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our web development service</p> creates custom, innovative solutions to enhance your online presence and engage your audience effectively with modern design.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-brands fa-apple text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">App Development</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our app development service</p> crafts innovative solutions to bring your ideas to life, ensuring seamless functionality and engaging user experiences.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-solid fa-marker text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">Graphic Design</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our graphic design service</p> delivers visually stunning solutions that captivate audiences, enhancing brand identity and communication across various platforms effectively.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-solid fa-magnifying-glass text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">SEO</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our SEO service</p> optimizes your online presence, improving search engine rankings and driving organic traffic to maximize your digital visibility.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-solid fa-video text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">Video Editing</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our video editing service</p> refines your footage with precision, enhancing storytelling and visual appeal to create compelling narratives and content.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
              <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] w-[300px] ">
                <i class="fa-brands fa-viacoin text-[#01eefe] text-[17px] md:text-[22px] "></i>
                <h2 className="text-[#fff] text-[16px] md:text-[18px] font-[600] mt-[12px] ">Google Ads</h2>
                <p className="text-[#ffffffbe] font-[500] text-[12px] md:text-[13px] text-center mt-[8px] "><p className="px-[8px] ">Our Google Ads service</p> maximizes your online reach, leveraging targeted campaigns and strategic optimization to drive traffic and boost conversions effectively.</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects"  className=" w-full bg-[#323846] ">
          <div className="px-[8px] sm:px-[12px] max-w-[1100px] mx-auto py-[40px] sm:py-[50px] md:py-[60px]  ">
            <h2 className=" text-[24px] md:text-[28px] text-center font-[800] text-[#fff] ">Our <span className="text-[#01eefe] ">Clients</span></h2>
            <p className="mt-[14px] text-[#ffffffbe] text-[14px] md:text-[15px] font-[500] text-center ">We contribute to these partnership programs, supported by global technology experts. Partnering with industry leaders, we offer quality technology solutions that meet your business needs.</p>
            <div className="flex items-center justify-center mt-[22px] flex-wrap ">

            </div>
          </div>
        </section>
        <section id="contact_me" className=" w-full ">
          <div className="py-[40px] sm:py-[50px] md:py-[60px] px-[8px] sm:px-[12px] ">
            <h2 className=" text-[24px] md:text-[28px] text-center font-[800] text-[#fff] ">Contact <span className="text-[#01eefe] ">Me!</span></h2>
            <form action="" className="mt-[30px] max-w-[550px] mx-auto ">
              <div className="flex items-center gap-[8px] w-full input-responsive ">
                <input className="bg-[#323846] outline-none rounded-[4px] border-none w-full flex-1 text-[#ffffffc7] text-[12px] md:text-[13px] px-[12px] py-[8px] " type="text" placeholder="First Name" />
                <input className="bg-[#323846] outline-none rounded-[4px] border-none w-full flex-1 text-[#ffffffc7] text-[12px] md:text-[13px] px-[12px] py-[8px]" type="text" placeholder="Last Name" />
              </div>
              <div className="flex items-center gap-[8px] w-full input-responsive mt-[8px] ">
                <input className="bg-[#323846] number_input outline-none rounded-[4px] border-none w-full flex-1 text-[#ffffffc7] text-[12px] md:text-[13px] px-[12px] py-[8px] " type="number" placeholder="Phone Number" />
                <input className="bg-[#323846] outline-none rounded-[4px] border-none w-full flex-1 text-[#ffffffc7] text-[12px] md:text-[13px] px-[12px] py-[8px]" type="email" placeholder="Email Address" />
              </div>
              <textarea className="w-full h-[240px] mt-[8px] bg-[#323846] outline-none rounded-[4px] border-none flex-1 text-[#ffffffc7] text-[12px] md:text-[13px] px-[12px] py-[8px] " name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
              <div className="flex items-center justify-center pt-[18px] ">
                  <div className="rounded-[30px] shadow px-[20px] md:px-[23px] py-[8px] md:py-[9px] text-[14px] md:text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Send Message
                  </div>
              </div>
            </form>
          </div>
        </section>
        <footer className="w-full bg-[#323846] ">
          <div className="max-w-[1000px] gap-[8px] mx-auto py-[8px] sm:py-[9px] md:py-[11px] px-[11px] md:px-[14px] flex items-center justify-between ">
            <p className=" text-[#ffffffbe] flex-1 text-[12px] md:text-[13px] font-[500] line-clamp-1 ">Visit our website for more information about our services and projects.</p>
            <Link target="blank" href={'https://redexpo.co.uk/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-solid fa-globe text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
          </div>
        </footer>
    </>
  );
}
