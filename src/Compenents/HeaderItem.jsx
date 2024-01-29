



const HeaderItem = (props) => {
    return (
        <>
            <div className="text-[#fff] px-[17px] md:px-[20px] select-none py-[16px] sm:py-[18px] md:py-[20px] lg:py-[25px] relative text-[13px] md:text-[14px] font-[600] group transition-three-second hover:text-[#01eefe] cursor-pointer " >
                <div className=" absolute left-[50%] rounded-[50px] top-0 w-[0px] bg-[#01eefe] inset-0 h-[4px] transition-three-second group-hover:w-full group-hover:left-0 "></div>
                {props.item_name}
            </div>
        </>
    )
}

export default HeaderItem