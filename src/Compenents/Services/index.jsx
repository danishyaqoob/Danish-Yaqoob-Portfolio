import ServiceCard from "./ServiceCard"





const ServicesSection = () => {
    return (
        <>
        <section id="services" className=" w-full  ">
          <div className="max-w-[1240px] mx-auto px-[8px] sm:px-[12px] py-[60px] ">
          <h2 className=" text-[24px] md:text-[28px] font-[800] text-[#fff] text-center ">Our <span className="text-[#01eefe] ">Services</span></h2>
            <div className="flex items-center gap-[12px] md:gap-[16px] flex-wrap justify-center mt-[22px] ">
              <ServiceCard icon = 'fa-solid fa-code text-[#01eefe] text-[17px] md:text-[22px] ' title = 'Web Development' h1 = 'Our web development service' h2 = 'creates custom, innovative solutions to enhance your online presence and engage your audience effectively with modern design.' />
              <ServiceCard icon = 'fa-brands fa-apple text-[#01eefe] text-[17px] md:text-[22px] ' title = 'App Development' h1 = 'Our app development service' h2 = 'crafts innovative solutions to bring your ideas to life, ensuring seamless functionality and engaging user experiences.' />
              <ServiceCard icon = 'fa-solid fa-marker text-[#01eefe] text-[17px] md:text-[22px] ' title = 'Graphic Design' h1 = 'Our graphic design service' h2 = 'delivers visually stunning solutions that captivate audiences, enhancing brand identity and communication across various platforms effectively.' />
              <ServiceCard icon = 'fa-solid fa-magnifying-glass text-[#01eefe] text-[17px] md:text-[22px] ' title = 'SEO' h1 = 'Our SEO service' h2 = 'optimizes your online presence, improving search engine rankings and driving organic traffic to maximize your digital visibility.' />
              <ServiceCard icon = 'fa-solid fa-video text-[#01eefe] text-[17px] md:text-[22px] ' title = 'Video Editing' h1 = 'Our video editing service' h2 = 'refines your footage with precision, enhancing storytelling and visual appeal to create compelling narratives and content.' />
              <ServiceCard icon = 'fa-brands fa-viacoin text-[#01eefe] text-[17px] md:text-[22px] ' title = 'Google Ads' h1 = 'Our Google Ads service' h2 = 'maximizes your online reach, leveraging targeted campaigns and strategic optimization to drive traffic and boost conversions effectively.' />
            </div>
          </div>
        </section>
        </>
    )
}

export default ServicesSection