import ClientSingleCard from "../Clients/ClientCard"



const ProjectsSection = () => {
    return (
        <>
        <section id="projects"  className=" w-full bg-[#323846]">
          <div className="px-[8px] sm:px-[12px] max-w-[1100px] mx-auto py-[40px] sm:py-[50px] md:py-[60px]  ">
            <h2 className=" text-[24px] md:text-[28px] text-center font-[800] text-[#fff] ">Our <span className="text-[#01eefe] ">Clients</span></h2>
            <p className="mt-[14px] text-[#ffffffbe] text-[14px] md:text-[15px] font-[500] text-center ">We contribute to these partnership programs, supported by global technology experts. Partnering with industry leaders, we offer quality technology solutions that meet your business needs.</p>
            <div className="flex items-center justify-center mt-[42px] flex-wrap relative z-0 ">
              <ClientSingleCard image={"/images/redexpo-removebg-preview.png"} />
              <ClientSingleCard image={'/images/traumacare.png'} />
              <ClientSingleCard image={'/images/KaraydaarLogo.png'} />
              <ClientSingleCard image={'/images/WhatsApp_Image_2023-05-16_at_10.39.26_PM-removebg-preview.png'} className='border-l' />
              <ClientSingleCard image={'/images/compress_logo.png'} />
              <ClientSingleCard image={'/images/logo.png'} />
              <ClientSingleCard image={'/images/brayv.ai (Logo) (500 × 200 px) (transparent).png'} />
              <ClientSingleCard image={'/images/systembot_logo.png'} />
            </div>
          </div>
        </section>
        </>
    )
}

export default ProjectsSection