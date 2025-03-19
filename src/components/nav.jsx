import { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom"
function Nav({ props, changeMenu }) {
    const navigate = useNavigate()
    const [inputtext,setInputtext] = useState("");
    const handleSearch = (event) => {
        event.preventDefault(); 
        navigate(`/keyword/${inputtext}`);
      };

    return (
        <nav className="xl:h-[100px] bg-[#252631] w-full box-border p-2 flex justify-between items-center">
            <div className=" relative ">
                <img className="w-44 inline-block" src="/logo.png" alt="" />
                <span className="absolute top-4 left-[100px] text-2xl font-font-logo text-end text-gray-400 bold">Panda<br></br>Film</span>
            </div>
            <nav className={`${props ? "flex absolute xl:inline top-0 right-0 bg-[#171d22] px-5 py-10 xl:px-0 xl:py-0" : "hidden"}  xl:bg-[#252631] xl:flex xl:relative text-white uppercase font-font-nav w-full xl:w-auto z-50`}>
                <i class="fas fa-times text-2xl absolute top-3 right-3 block xl:hidden"
                    onClick={changeMenu}
                ></i>

                <ul className="xl:flex xl:items-center text-[24px] text-lg list-none gap-2">
                    <li className="cursor-pointer mx-2 my-[3px] group relative">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400" : "text-gray-400"
                            }
                        >
                            Trang chủ
                        </NavLink>
                        <span className="absolute bg-yellow-400 w-0 h-[2px] bottom-0 left-0 group-hover:w-full transition-all duration-150"></span>
                    </li>
                    <li className="cursor-pointer mx-2 my-[3px] group relative">
                        <NavLink
                            to="/phim-le"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400" : "text-gray-400"
                            }
                        >
                            Phim lẻ
                        </NavLink>
                        <span className="absolute bg-yellow-400 w-0 h-[2px] bottom-0 left-0 group-hover:w-full transition-all duration-150"></span>
                    </li>
                    <li className="cursor-pointer mx-2 my-[3px] group relative">
                        <NavLink
                            to="/phim-bo"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400" : "text-gray-400"
                            }
                        >
                            Phim bộ
                        </NavLink>
                        <span className="absolute bg-yellow-400 w-0 h-[2px] bottom-0 left-0 group-hover:w-full transition-all duration-150"></span>
                    </li>
                    <li className="cursor-pointer mx-2 my-[3px] group relative">
                        <NavLink
                            to="/hoat-hinh"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400" : "text-gray-400"
                            }
                        >
                            Phim hoạt hình
                        </NavLink>
                        <span className="absolute bg-yellow-400 w-0 h-[2px] bottom-0 left-0 group-hover:w-full transition-all duration-150"></span>
                    </li>
                    <li className="cursor-pointer mx-2 my-[3px] group relative">
                        <NavLink
                            to="/tv-shows"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400" : "text-gray-400"
                            }
                        >
                            TV Shows
                        </NavLink>
                        <span className="absolute bg-yellow-400 w-0 h-[2px] bottom-0 left-0 group-hover:w-full transition-all duration-150"></span>
                    </li>
                </ul>

            </nav>
            <div className="hidden xl:flex items-center">
                <div className="flex mx-4 gap-6">
                    <form onSubmit={handleSearch} className="border-[1px] rounded-2xl overflow-hidden flex">
                        <input type="text" className=" w-32 text-md ml-5 bg-[#252631] outline-0 mx-2 text-gray-200"
                            onChange={(e)=>{
                               setInputtext(e.target.value);
                            }}
                        />
                        <button type="submit" className="bg-gray-100 px-[10px] py-[2px]"><i class="fa-solid fa-magnifying-glass"
                           
                        ></i></button>
                    </form>
                    <div className="flex items-center text-xl gap-2 text-white">
                        <i class="fa-solid fa-earth-americas text-yellow-400"></i>
                        <p>VI</p>
                        <i class="fa-solid fa-caret-down"></i>
                    </div>
                </div>
                <div>
                    <button className="hover:bg-yellow-300 hover:text-black py-2 px-5 uppercase text-white font-medium border-yellow-400 border-2 rounded-3xl">Đăng nhập</button>
                </div>
            </div>
        </nav>
    )
}

export default Nav