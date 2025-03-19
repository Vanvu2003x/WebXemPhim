import { useState } from "react"
import Nav from "./nav"
function Header() {
    const [menulist,setMenulist] =  useState(false)
    function handlerClickMenu(){
        setMenulist(!menulist)
    }
    return (<>
        <div className="relative">
        <header className="hidden xl:flex bg-[#12151e] w-full h-[40px] justify-end xl:justify-between items-center px-10 text-sm">
                <div className="xl:block hidden text-slate-400">PandaFilm Free <span className="text-yellow-400">Subscription !</span></div>
                <div>
                    <ul className="flex gap-4 text-slate-400 xl:gap-9">
                        <li>
                            <span>Abouts</span><span className="xl:px-5 px-2">|</span><span>FAQs</span>
                        </li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-telegram"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                    </ul>
                </div>
            </header>
            <Nav props={menulist} changeMenu={handlerClickMenu}></Nav>
            <i onClick={handlerClickMenu} className={`${!menulist ? "block" :"hidden"}`}><i class="top-[40px] right-5 text-2xl absolute text-white xl:hidden fa-solid fa-list"></i></i>

        </div>
       
        
    </>)
}

export default Header