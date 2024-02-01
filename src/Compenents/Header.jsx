import HeaderItem from "./HeaderItem"
import PortfolioLogo from "./PortfolioLogo"



// export const metadata = {
//     title: "About Us | KarayDaar",
// }

const Header = () => {
    return (
        <>
            <main className="sticky top-0 bg-[#20242d] z-10">
                <div className="flex items-center justify-between max-w-[1280px] px-[18px] mx-auto py-[12px] sm:py-[0px] ">
                    <PortfolioLogo/>
                    <div className="sm:block hidden">
                        <div className="flex items-center px-[11px] md:px-[14px] ">
                            <HeaderItem link = "#home" item_name = 'Home' />
                            <HeaderItem link = "#about_me" item_name = 'About' />
                            <HeaderItem link = "#services" item_name = 'Services' />
                            <HeaderItem link = "#projects" item_name = 'Projects' />
                            <HeaderItem link = "#contact_me" item_name = 'Contact' />
                            {/* <HeaderItem item_name = 'Skills' /> */}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Header