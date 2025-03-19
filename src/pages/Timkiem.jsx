import {useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import CardMovie from "../components/cardMovie";
import { useParams } from "react-router-dom";

function Timkiem(){
    const [listFilms, setListFilms] = useState({});
    const {keyword} = useParams()

    useEffect(()=>{
        const fetchAPI = async ()=>{
            const APIURL = `https://phimapi.com/v1/api/tim-kiem?keyword=${keyword}&limit=8`;
            const reponse = await fetch(APIURL)
            const data = await reponse.json();
            setListFilms(data.data);
        }
        fetchAPI()

    },[keyword])

    return(<>
    <Header></Header>
    <main>
                <div className='shadow-2xl bg-slate-300 m-10 p-10'>
                    <h1 className='text-red-700 top-2 text-[40px] uppercase font-[6px]'>Nội dung tìm kiếm</h1>
                    <div className="flex flex-wrap gap-5 justify-start items-center">
                        {listFilms.items?.map((data) => {
                            return <CardMovie film={data} className="xl:w-[220px] xl:h-[280px] overflow-hidden cursor-pointer my-10 border-black border-2"></CardMovie>
                        })}
                    </div>
                    
                </div>

            </main>
    <Footer></Footer>
    </>)
}

export default Timkiem;