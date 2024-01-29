import HeaderItem from "./HeaderItem"
import PortfolioLogo from "./PortfolioLogo"



// export const metadata = {
//     title: "About Us | KarayDaar",
// }

const Header = () => {
    return (
        <>
            <main className="sticky top-0 bg-[#20242d] ">
                <div className="flex items-center justify-between max-w-[1280px] px-[18px] mx-auto py-[12px] sm:py-[0px] ">
                    <PortfolioLogo/>
                    <div className="sm:block hidden">
                        <div className="flex items-center px-[11px] md:px-[14px] ">
                            <HeaderItem item_name = 'Home' />
                            <HeaderItem item_name = 'About' />
                            {/* <HeaderItem item_name = 'Skills' /> */}
                            <HeaderItem item_name = 'Services' />
                            <HeaderItem item_name = 'Projects' />
                            <HeaderItem item_name = 'Contact' />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Header