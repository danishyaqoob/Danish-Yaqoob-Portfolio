import Link from "next/link"




const FooterSection = () => {
    return (
        <>
        <footer className="w-full bg-[#323846] ">
          <div className="max-w-[1000px] gap-[8px] mx-auto py-[8px] sm:py-[9px] md:py-[11px] px-[11px] md:px-[14px] flex items-center justify-between ">
            <p className=" text-[#ffffffbe] flex-1 text-[12px] md:text-[13px] font-[500] line-clamp-1 ">Visit our website for more information about our services and projects.</p>
            <Link target="blank" href={'https://redexpo.co.uk/'} className="rounded-[50%] border-[2px] border-[#01eefe] shadow transorm-scale transition-three-second cursor-pointer flex items-center justify-center h-[28px] md:h-[30px] w-[28px] md:w-[30px] "><i class="fa-solid fa-globe text-[#01eefe] text-[12px] md:text-[14px] "></i></Link>
          </div>
        </footer>
        </>
    )
}

export default FooterSection