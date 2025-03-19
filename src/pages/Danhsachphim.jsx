import Ads from '../components/ads';
import Header from '../components/header';
import Footer from '../components/footer';
import { useEffect, useState } from 'react';
import CardMovie from '../components/cardMovie';
import { useParams } from 'react-router-dom';

function Danhsachphim() {
    const [listFilms, setListFilms] = useState({});
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(0)
    const { type } = useParams();
    const [pageRange, setPageRange] = useState({ start: 1, end: 19 });

    useEffect(() => {
        setPageNumber(1);
        const fetchData = async () => {
            try {
                let APIurl = "https://phimapi.com/danh-sach/phim-moi-cap-nhat";
                if (type)
                    APIurl = "https://phimapi.com/v1/api/danh-sach/" + type;
                const response = await fetch(APIurl)
                const data = await response.json();
                setTotalPage(data.pagination.totalPages)
                if (type)
                    setTotalPage(data.data.params.pagination.totalPages)
            } catch (error) {
                console.error('Lỗi khi gọi API lấy số trang:', error);
            }
            finally {

            }
        }

        fetchData()
    }, [type])
    useEffect(() => {
        const fetchData = async () => {
            try {
                let APIurl = "https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=" + pageNumber;
                if (type)
                    APIurl = "https://phimapi.com/v1/api/danh-sach/" + type + "/?page=" + pageNumber;
                const response = await fetch(APIurl);
                const data = await response.json();
                setListFilms(data);
                if (type)
                    setListFilms(data.data);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
            }
        };

        fetchData();
    }, [pageNumber, type]);
    return (
        <>
            <div className='fixed bottom-0 right-0 w-full z-40'>
                <Ads />
            </div>
            <Header />
            <main className='bg-slate-400 p-10'>
                <div className='shadow-2xl bg-[#28282D] mx-10 p-10'>
                    <h1 className='text-slate-400 font-black w-[170px] h-10 flex bg- bg-black text-[14px] items-center p-5 pentagon uppercase'>Mới Cập Nhật</h1>
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                        {listFilms.items?.map((data) => {
                            return <CardMovie film={data} className="xl:w-[200px] xl:h-[280px] overflow-hidden cursor-pointer my-10 border-black border-2"></CardMovie>
                        })}
                    </div>
                    <div className='w-full h-10 overflow-hidden flex flex-wrap justify-between mt-5'>
                        {
                            (() => {

                                let buttons = [];
                                for (let index = pageRange.start; index <= pageRange.end; index++) {
                                    buttons.push(
                                        <button
                                        onClick={
                                            ()=>{
                                                setPageNumber(index)
                                                if(index>1)
                                                   setPageRange({start: index-1,end: index+20}) 
                                            }
                                        }
                                        className={`px-4 text-[12px] py-2 w-10 h-10 flex justify-center items-center mx-2 my-1 ${pageNumber === index  ? 'bg-blue-500' : 'bg-gray-600'} text-white`}
                                        key={index}>{index}</button>
                                    );
                                }
                                return buttons;
                            })()
                        }
                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}

export default Danhsachphim;
