import { useEffect, useState, useContext } from "react";
import { FilmContext } from "../contexts/FilmContext";
import { useNavigate } from "react-router-dom";

function CardMovie({ film, className }) {
    const [sotap, setSotap] = useState(0);
    const { setFilm_id } = useContext(FilmContext);
    const navigate = useNavigate()
    const handlerClick = () => {
        setFilm_id(film.slug);

        navigate(`/detail/${film.slug}`);

    };

    useEffect(() => {
        const apiURL = "https://phimapi.com/phim/" + film.slug;
        const fetchAPI = async () => {
            const response = await fetch(apiURL);
            const data = await response.json();
            setSotap(data.movie.episode_total);
        };
        fetchAPI();
    }, [film.slug]);

    return (
        <>
            <div className={`relative ${className} group`}>
            <i class="absolute z-50 hidden group-hover:flex top-[50%] left-[33.33%] fa-solid fa-play text-2xl text-white justify-center items-center border-2 border-white rounded-full w-1/3 h-12"
             onClick={handlerClick}
             ></i>
                <img
                    src={film.poster_url.startsWith('http') ? film.poster_url : `https://phimimg.com/${film.poster_url}`}
                    alt=""
                    className="w-full h-full group-hover:scale-125 duration-150 transition-all object-cover"
                />
                <div className="overflow-hidden h-12 w-full absolute text-center bottom-0 text-white font-semibold bg-black opacity-65 transition-all duration-150">
                    <h1>{film.name}</h1>
                    <h1>{film.origin_name}</h1>
                </div>
                <div>
                    <h1 className="bg-yellow-400 inline-block text-sm py-1 px-9 absolute top-0 right-0 rounded-bl-xl">{sotap}</h1>
                </div>
            </div>
        </>
    );
}

export default CardMovie;
