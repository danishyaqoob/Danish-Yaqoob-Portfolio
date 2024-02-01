



const ClientSingleCard = ({image, className, ...props}) => {
    return (
        <>
            <div className={`animated_box client_box z-0 first:border-l last:border-b h-[220px] w-[260px] justify-center flex items-center cursor-pointer border-r border-t border-[#596070] relative ${className}`}>
                  <div className="z-[1] relative p-4 h-full w-full flex grayscale group hover:grayscale-0 transition-three-second items-center justify-center">
                      <img src={image} alt="" className="w-[120px] group-hover:scale-125 transition-three-second" />
                  </div>
            </div>
        </>
    )
}

export default ClientSingleCard



// let a = {name : 'huzaifa', roll_number : 90}

// a.name
// a['name']

// let {name, ...b} = a