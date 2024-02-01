



const ContactSection = () => {
    return (
        <>
        <section id="contact_me" className=" w-full ">
          <div className="py-[40px] sm:py-[50px] md:py-[60px] px-[8px] sm:px-[12px] ">
            <h2 className=" text-[24px] md:text-[28px] text-center font-[800] text-[#fff] ">Contact <span className="text-[#01eefe] ">Us!</span></h2>
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
        </>
    )
}

export default ContactSection