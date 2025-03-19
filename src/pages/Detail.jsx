import {useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate, useParams } from "react-router-dom";

function Detail(){
    const [film,setFilm] = useState()
    const {tenphim} = useParams()
    const nav = useNavigate()
    useEffect(()=>{
        const fetchAPI = async ()=>{
            const APIURL = "https://phimapi.com/phim/"+tenphim;
            const reponse = await fetch(APIURL)
            const data = await reponse.json();
            setFilm(data);
        }
        fetchAPI()
    },[tenphim])

    return(<>
    <Header></Header>
    <main className="bg-[#02080F] p-10">
        {film ? (
            <>  
                <div className="bg-[#181818] h-10 w-full mb-5 text-white text-sm flex items-center gap-1 p-5">
                    <span
                    onClick={()=>{
                        nav("/")
                    }} 
                    className="text-yellow-400 cursor-pointer"><i class="fa-solid fa-house"></i>  Xem phim</span>/<span className="text-white">{film.movie.name}</span>
                </div>
                <div>
                    <div className="flex bg-[#222222] text-white relative flex-col xl:flex-row">
                        <img className="w-full xl:w-1/2 cursor-pointer" src={film.movie.thumb_url} alt="" onClick={()=>{
                            nav(`/video/${tenphim}`)
                        }} />
                        <div className="h-[70px] w-[70px] cursor-pointer left-[40%] top-[15%] xl:left-[22%] xl:top-[140px] absolute border-[3px] rounded-full border-white flex justify-center items-center">
                            <i class="fa-solid fa-play text-2xl"></i>
                        </div>
                        <div className="xl:w-1/2">
                            <h1 className="text-center bg-[#181818] p-3 text-[#DA4C18] text-2xl">{`${film.movie.name} ${film.movie.quality}-${film.movie.lang}`}
                                <br></br>
                                <span className="text-white text-lg">{film.movie.origin_name}</span>
                            </h1>
                            <h1 className="flex justify-between m-5 border-gray-500 border-b-2 p-2"><span>Tập</span> <span>{film.movie.episode_current}</span></h1>
                            <h1 className="flex justify-between m-5 border-gray-500 border-b-2 p-2"><span>Trạng thái</span><span>{film.movie.status==="ongoing" ? "Đang cập nhật" : "Đã hoàn thành"}</span></h1>
                            <h1 className="flex justify-between m-5 border-gray-500 border-b-2 p-2"><span>Thể loại</span><span className="capitalize">{film.movie.type}</span></h1>
                            <h1 className="flex justify-between m-5 border-gray-500 border-b-2 p-2"><span>Năm</span><span>{film.movie.year}</span></h1>
                        </div>
                    
                    </div>
                    <div className="bg-[#282828] text-white mt-10 p-4 text-lg">
                        <p className="text-[#C58559]"><span className="border-b-2 border-[#C58559]">Nội dung phim - {film.movie.name}</span></p> 
                        <p className="mt-5 text-sm">{film.movie.content}</p>
                    </div>          

                </div>
            </>

        ) : (
            <div>Đang tải</div>
        )}
    </main>
    <Footer></Footer>
    </>)
}

export default Detail;