import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate, useParams } from 'react-router-dom';

const Video = () => {
    const videoRef = useRef(null);
    const nav = useNavigate();
    const { tenphim } = useParams();
    const [videoUrl, setVideoUrl] = useState("");
    const [poster, setPoster] = useState();
    const [espisodes, setEspisodes] = useState([]);
    const [espisode, setEspisode] = useState(1);
    const [name, setName] = useState("");

    useEffect(() => {
        const APIurl = `https://phimapi.com/phim/${tenphim}`;
        const fetchData = async () => {
            const response = await fetch(APIurl);
            const data = await response.json();
            setVideoUrl(data.episodes[0]?.server_data[0]?.link_m3u8 || "");
            setPoster(data.movie.thumb_url);
            setName(data.movie.name);
            setEspisodes(data.episodes[0]?.server_data || []);
        };
        fetchData();
    }, [tenphim]);

    useEffect(() => {
        if (Array.isArray(espisodes) && espisodes.length > 0) {
            setVideoUrl(espisodes[espisode - 1]?.link_m3u8 || "");
        }
    }, [espisode, espisodes]);

    useEffect(() => {
        if (videoUrl && Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(videoRef.current);
        }
    }, [videoUrl]);

    return (
        <>
            <Header />
            <main>
                <div className="video-player bg-[#222222] p-5">
                    <div className="bg-[#181818] h-10 w-full mb-5 text-white text-sm flex items-center gap-1 p-5">
                        <span
                            onClick={() => nav("/")}
                            className="text-yellow-400 cursor-pointer"><i className="fa-solid fa-house"></i> Xem phim</span> /
                        <span
                            onClick={() => nav(`/detail/${tenphim}`)}
                            className="text-yellow-400 cursor-pointer">{name}</span> /
                        <span className="text-white">{espisodes[espisode - 1]?.name || "Episode"}</span>
                    </div>
                    <video ref={videoRef} poster={poster} controls width="60%" className='mx-auto' />
                    <div className='hidden_scroll flex gap-3 max-h-[200px] overflow-y-scroll flex-wrap bg-[#464A52] p-4 my-10 justify-start'>
                        {espisodes?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setEspisode(index + 1)}
                                className={`${espisode === index + 1 ? 'bg-yellow-400 text-black' : 'bg-black text-white'} px-2 py-1 rounded-xl`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Video;
